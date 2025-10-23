
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock news data - in a real app this would come from an API
const mockNewsItems = [
  {
    id: 1,
    title: "5G Technology Reshaping Business Communications",
    description: "How the latest cellular technology is transforming enterprise connectivity and enabling new business models.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 2,
    title: "Cloud Telephony Adoption Accelerates Post-Pandemic",
    description: "Businesses are increasingly moving their communication systems to cloud-based solutions for flexibility and cost savings.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    title: "Web Applications Drive Digital Transformation",
    description: "Custom web applications are becoming central to business strategy as organizations prioritize digital experiences.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    title: "AI Integration in Business Communications",
    description: "Artificial intelligence is enhancing business telephony with smart assistants, voice analysis, and automated responses.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === mockNewsItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? mockNewsItems.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds per slide
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Resume after some inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000); // 10 seconds
    
    return () => clearTimeout(timeout);
  };

  return (
    <div 
      className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Carousel slides */}
      <div className="h-full">
        {mockNewsItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img 
              src={`${item.image}?auto=format&fit=crop&w=1600&q=80`} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="carousel-caption">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
              <p className="hidden md:block">{item.description}</p>
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
        {mockNewsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
