import Link from "next/link";
import { attributes } from "../content/categories.md";

function HomePage() {
  const { categories } = attributes;
  return (
    <ol>
      {(categories || []).map(({ slug, title }, i) => (
        <li key={i}>
          <Link href={`/painting?category=${slug}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default HomePage;
