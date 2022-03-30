import Link from "next/link";
import { useEffect, useState } from "react";
import { getStaticPaths } from "./painting/[id].js";

function HomePage() {
  const paths = ["1", "2"];
  return (
    <ol>
      {paths &&
        paths.map((id, i) => (
          <li key={i}>
            <Link href={`/painting/${id}`}>
              <a>Painting {id}</a>
            </Link>
          </li>
        ))}
    </ol>
  );
}

export default HomePage;
