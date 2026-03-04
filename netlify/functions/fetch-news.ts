
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent', { keepArray: true }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
      ['content:encoded', 'contentEncoded']
    ]
  }
});

const feeds = [
  "https://telecoms.com/feed/",
  "https://www.lightreading.com/rss.xml",
  "http://feeds.arstechnica.com/arstechnica/index"
];

function extractImage(item: any): string | null {

  // 1️⃣ media:content
  if (item.mediaContent && item.mediaContent.length > 0) {
    const media = item.mediaContent.find((m: any) =>
      m.$?.url?.match(/\.(jpg|jpeg|png|webp)/i)
    );
    if (media?.$?.url) return media.$.url;
  }

  // 2️⃣ media:thumbnail
  if (item.mediaThumbnail && item.mediaThumbnail.length > 0) {
    if (item.mediaThumbnail[0].$?.url)
      return item.mediaThumbnail[0].$.url;
  }

  // 3️⃣ content:encoded
  if (item.contentEncoded) {
    const match = item.contentEncoded.match(
      /<img[^>]+src="([^">]+)"/i
    );
    if (match) return match[1];
  }

  // 4️⃣ description fallback
  if (item.content) {
    const match = item.content.match(
      /<img[^>]+src="([^">]+)"/i
    );
    if (match) return match[1];
  }

  return null;
}

export async function handler() {
  try {
    const allItems: any[] = [];

    for (const feedUrl of feeds) {
      const response = await fetch(feedUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36"
        }
      });

      if (!response.ok) {
        console.error(`Failed ${feedUrl}: ${response.status}`);
        continue; // skip failing feed instead of crashing everything
      }

      const xml = await response.text();
      const feed = await parser.parseString(xml);

      feed.items.slice(0, 5).forEach(item => {
        allItems.push({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source: feed.title,
		  image: extractImage(item)
        });
      });
    }

    allItems.sort((a, b) =>
      new Date(b.pubDate || 0).getTime() -
      new Date(a.pubDate || 0).getTime()
    );

	const finalItems = allItems.slice(0, 15);
	
	// Keep images only for first 3
	finalItems.forEach((item, index) => {
	  if (index > 2) item.image = null;
	});
	
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalItems)
    };

  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
}