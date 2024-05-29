import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-news-item">First News Item</Link>
        </li>
        <li>
          <Link href="/news/second-news-item">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/third-news-item">Third News Item</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
