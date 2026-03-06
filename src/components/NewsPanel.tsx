
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from 'react';

// Types
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  url: string;
  date: string;
}

interface NewsPanelProps {
  title: string;
  category: "cellular" | "telephony" | "web";
}

// Mock news data WAS HERE now is deleted - in a real app this would come from an API

const [news, setNews] = useState<NewsItem[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/.netlify/functions/fetch-news")
    .then(res => res.json())
    .then(data => {
      setNews(data);
      setLoading(false);
    })
    .catch(err => {
      console.error("News fetch failed", err);
      setLoading(false);
    });
}, []);

const NewsPanel: React.FC<NewsPanelProps> = ({ title, category }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    const fetchNews = () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        setNews(mockNewsData[category]);
        setIsLoading(false);
      }, 1000);
    };

    fetchNews();

    // Update every 10 minutes (simulate periodic updates)
    const intervalId = setInterval(fetchNews, 600000);

    return () => clearInterval(intervalId);
  }, [category]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-consulting-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          // Loading state
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
            </div>
          ))
        ) : (
          // News items
          news.map(item => (
            <div key={item.id} className="pb-3 border-b last:border-b-0 last:pb-0">
              <h3 className="font-semibold hover:text-consulting-blue">
                <a href={item.url}>{item.title}</a>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
              <div className="text-xs text-gray-500 mt-1">{formatDate(item.date)}</div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default NewsPanel;
