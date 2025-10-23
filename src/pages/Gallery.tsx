
import React, { useState } from 'react';
import GalleryItem, { GalleryItemProps } from '@/components/GalleryItem';
import { Button } from '@/components/ui/button';

// Mock gallery data
const galleryItems: GalleryItemProps[] = [
  {
    id: 1,
    title: "5G Tower Installation",
    category: "Cellular",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "VoIP System Deployment",
    category: "Telephony",
    date: "January 2023",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Progressive Web App Launch",
    category: "Web",
    date: "April 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "IoT Sensor Network",
    category: "Cellular",
    date: "February 2023",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Call Center Optimization",
    category: "Telephony",
    date: "December 2022",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "E-commerce Platform Redesign",
    category: "Web",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Private 5G Network",
    category: "Cellular",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Cloud PBX Migration",
    category: "Telephony",
    date: "April 2023",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "SaaS Dashboard Development",
    category: "Web",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredItems = filter 
    ? galleryItems.filter(item => item.category === filter) 
    : galleryItems;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-consulting-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-consulting-dark">Project Gallery</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Browse our portfolio of successful projects across cellular, telephony, and web applications.
          </p>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={filter === null ? "default" : "outline"} 
              onClick={() => setFilter(null)}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === "Cellular" ? "default" : "outline"} 
              onClick={() => setFilter("Cellular")}
            >
              Cellular
            </Button>
            <Button 
              variant={filter === "Telephony" ? "default" : "outline"} 
              onClick={() => setFilter("Telephony")}
            >
              Telephony
            </Button>
            <Button 
              variant={filter === "Web" ? "default" : "outline"} 
              onClick={() => setFilter("Web")}
            >
              Web
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                image={item.image}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
