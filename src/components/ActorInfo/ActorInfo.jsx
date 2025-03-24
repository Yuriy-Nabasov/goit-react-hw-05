import axios from "axios";
import { useEffect, useState } from "react";

export default function ActorInfo({ actorName }) {
  const [wikiUrl, setWikiUrl] = useState("");

  useEffect(() => {
    const fetchWikiUrl = async () => {
      try {
        const response = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            srsearch: actorName,
            format: "json",
            origin: "*",
          },
        });
        const pages = response.data.query.search;
        if (pages.length > 0) {
          const title = pages[0].title;
          const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(
            title
          )}`;
          setWikiUrl(url);
        }
      } catch (error) {
        console.error("Error fetching Wikipedia URL:", error);
      }
    };
    fetchWikiUrl();
  }, [actorName]);

  const openWikipediaPage = () => {
    if (wikiUrl) {
      window.open(wikiUrl, "_blank");
    }
  };

  return (
    <a href="#" onClick={openWikipediaPage}>
      More info..
    </a>
  );
}
