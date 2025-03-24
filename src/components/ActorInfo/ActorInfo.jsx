import axios from "axios";
import { useState } from "react";
import css from "./ActorInfo.module.css";

export default function ActorInfo({ actorName }) {
  const [wikiUrl, setWikiUrl] = useState("");

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
        console.log(wikiUrl);
        window.open(url, "_blank");
      }
    } catch (error) {
      console.error("Error fetching Wikipedia URL:", error);
    }
  };

  return (
    <button className={css.btn} onClick={fetchWikiUrl}>
      More info..
    </button>
  );
}
