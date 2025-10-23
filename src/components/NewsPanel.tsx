
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

// Mock news data - in a real app this would come from an API
const mockNewsData: Record<string, NewsItem[]> = {
  cellular: [
    {
      id: 1,
      title: "5G Network Expansion Accelerates Across Major Cities",
      summary: "Telecom giants are ramping up 5G deployments in urban centers, promising faster speeds for businesses.",
      url: "#",
      date: "2023-05-01"
    },
    {
      id: 2,
      title: "New Cellular IoT Standard Finalized for Industrial Applications",
      summary: "The latest cellular IoT protocol aims to revolutionize industrial monitoring and automation systems.",
      url: "#",
      date: "2023-04-28"
    },
    {
      id: 3,
      title: "Private 5G Networks Gain Traction in Manufacturing",
      summary: "Companies are investing in private cellular networks for improved security and reliability.",
      url: "#",
      date: "2023-04-25"
    }
  ],
  telephony: [
    {
      id: 1,
      title: "VoIP Platforms See Surge in Enterprise Adoption",
      summary: "More businesses are transitioning to VoIP solutions as remote work becomes permanent for many organizations.",
      url: "#",
      date: "2023-05-02"
    },
    {
      id: 2,
      title: "AI-Powered Call Analysis Tools Transform Customer Service",
      summary: "New telephony tools use artificial intelligence to analyze call sentiment and improve customer interactions.",
      url: "#",
      date: "2023-04-29"
    },
    {
      id: 3,
      title: "Unified Communications Platforms Integrate Advanced Security Features",
      summary: "Leading UC providers are implementing zero-trust security models in their communications platforms.",
      url: "#",
      date: "2023-04-26"
    }
  ],
  web: [
    {
      id: 1,
      title: "Progressive Web Apps Drive Mobile Engagement",
      summary: "Companies see higher conversion rates after implementing PWA technology for their web applications.",
      url: "#",
      date: "2023-05-03"
    },
    {
      id: 2,
      title: "Serverless Architecture Adoption Continues to Grow",
      summary: "Web developers increasingly choose serverless approaches for scalability and maintenance benefits.",
      url: "#",
      date: "2023-04-30"
    },
    {
      id: 3,
      title: "WebAssembly Opens New Possibilities for Browser-Based Applications",
      summary: "Complex applications previously requiring native code can now run efficiently in the browser.",
      url: "#",
      date: "2023-04-27"
    }
  ]
};

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
