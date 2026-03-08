import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

export interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
  source?: string;
}

interface NewsPanelProps {
  title: string;
  category: "cellular" | "telephony" | "web";
}

const keywordMap: Record<string, string[]> = {
  cellular: ["5g","mobile","iphone","android","carrier","lte","modem"],
  telephony: ["voip","sip","pbx","telecom","call","dial"],
  web: ["web","browser","javascript","react","html","css","cloud"]
};

const NewsPanel: React.FC<NewsPanelProps> = ({ title, category }) => {

  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/fetch-news")
      .then(res => res.json())
      .then(data => {

        console.log("Panel received:", data);

        const keywords = keywordMap[category];

        const filtered = data.filter((item: NewsItem) =>
          keywords.some(k =>
            item.title.toLowerCase().includes(k)
          )
        );

        setNews(filtered.slice(0,5));
        setIsLoading(false);
      })
      .catch(err => {
        console.error("News fetch failed", err);
        setIsLoading(false);
      });

  }, [category]);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-consulting-blue">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          news.map(item => (
            <div key={item.link} className="pb-3 border-b last:border-b-0 last:pb-0">

              <h3 className="font-semibold hover:text-consulting-blue">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>

              {item.source && (
                <div className="text-xs text-gray-500 mt-1">
                  {item.source}
                </div>
              )}

            </div>
          ))
        )}

      </CardContent>
    </Card>
  );
};

export default NewsPanel;