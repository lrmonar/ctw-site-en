import Parser from "rss-parser";
import fs from "fs";
import path from "path";

const parser = new Parser();

const feeds = [
  "https://telecoms.com/feed/",
  "https://www.lightreading.com/rss.xml",
  "http://feeds.arstechnica.com/arstechnica/index"
];

export async function handler() {
  try {
    const allItems = [];

    for (const feedUrl of feeds) {
      const feed = await parser.parseURL(feedUrl);

      feed.items.slice(0, 5).forEach(item => {
        allItems.push({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source: feed.title
        });
      });
    }

    // Sort by date (newest first)
    allItems.sort((a, b) => 
      new Date(b.pubDate || 0).getTime() - 
      new Date(a.pubDate || 0).getTime()
    );

    const outputPath = path.join(process.cwd(), "src/data/news.json");

    fs.writeFileSync(
      outputPath,
      JSON.stringify(allItems.slice(0, 15), null, 2)
    );
	
	// 🔔 Trigger Netlify rebuild
	await fetch(process.env.BUILD_HOOK_URL!, {
	  method: "POST"
	});
	
    return {
      statusCode: 200,
      body: "News updated"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error fetching news"
    };
  }
}