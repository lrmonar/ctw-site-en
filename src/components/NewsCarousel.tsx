import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
  source?: string;
  image?: string | null;
}

const NewsCarousel: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch news from Netlify function
  useEffect(() => {
    fetch("/.netlify/functions/fetch-news")
      .then((res) => res.json())
      .then((data) => {
        console.log("NEWS DATA:", data);
        setNews(data.slice(0, 5)); // only show top 5 in carousel
      })
      .catch((err) => console.error("News fetch error:", err));
  }, []);

  if (!news || news.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-200">
        Loading news...
      </div>
    );
  }

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
      interval = window.setInterval(nextSlide, 6000);
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
        {news.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-800 to-gray-900 flex items-center justify-center p-8">
              <div className="text-white text-center max-w-3xl">

                {item.image && (
                  <img
                    src={item.image}
                    className="mx-auto mb-4 max-h-60 object-cover rounded"
                  />
                )}

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

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;