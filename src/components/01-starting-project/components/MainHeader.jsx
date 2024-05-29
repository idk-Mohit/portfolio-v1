import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
