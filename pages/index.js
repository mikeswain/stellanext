import Link from "next/link";
import { attributes } from "../content/categories.md";

function HomePage() {
  const { categories } = attributes;
  return (
    <ol>
      {(categories || []).map(({ slug }, i) => (
        <li key={i}>
          <Link href={`/painting?category=${slug}`}>
            <a>{slug}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default HomePage;
