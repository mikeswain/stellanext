import Link from "next/link";
import { attributes } from "../content/categories.md";
import MainMenu, { getStaticProps as menuProps } from "../MainMenu";

function HomePage({ pageSlugs }) {
  const { categories } = attributes;
  return (
    <>
      <MainMenu pages={pages} />
      <ol>
        {(categories || []).map(({ slug, title }, i) => (
          <li key={i}>
            <Link href={`/painting?category=${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default HomePage;

export async function getStaticProps() {
  return {
    props: { ...menuProps().props }
  };
}
