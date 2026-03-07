import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
  source?: string;
  image?: string | null;
}

export default function NewsCarousel() {

  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/.netlify/functions/fetch-news");
        const data = await res.json();

        console.log("NEWS DATA:", data);

        if (Array.isArray(data)) {
          setNews(data.slice(0, 5));
        }

      } catch (err) {
        console.error("News fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || news.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === news.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, news]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (loading) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-200">
        Loading latest tech news...
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-200">
        No news available
      </div>
    );
  }

  return (
    <div
      className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
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

      {/* arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
}