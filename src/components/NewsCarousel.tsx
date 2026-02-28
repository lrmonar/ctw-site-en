// TEMP TEST CHANGE
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import news from "@/data/news.json";

interface NewsItem {
  id: number;
  title: string;
  description?: string;
  link: string;
  pubDate?: string;
  source?: string;
}

const NewsCarousel: React.FC = () => {
  if (!news || news.length === 0) {
    return null;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div
      className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <div className="h-full">
        {(news as NewsItem[]).map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-800 to-gray-900 flex items-center justify-center p-8">
              <div className="text-white text-center max-w-3xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {item.title}
                </h2>

                {item.source && (
                  <p className="text-sm opacity-80 mb-4">
                    {item.source}
                  </p>
                )}

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-4 py-2 rounded"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {(news as NewsItem[]).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;