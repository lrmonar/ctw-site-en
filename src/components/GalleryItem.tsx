
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export interface GalleryItemProps {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  category,
  date,
  image,
}) => {
  return (
    <Card className="gallery-item overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold">{title}</h3>
          <div className="flex justify-between text-sm text-white/80 mt-1">
            <span>{category}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GalleryItem;
