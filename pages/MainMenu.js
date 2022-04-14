import { readdir } from "fs/promises";
import Link from "next/link";
import styles from "./MainMenu.module.css";

export default function MainMenu({ pages }) {
  return (
    <nav className={styles.root}>
      {pages &&
        pages.map(({ slug, title }, i) => (
          <Link key={i} href={`/page/${slug}`}>
            {title}
          </Link>
        ))}
    </nav>
  );
}

export async function getStaticProps() {
  const { readdir } = import("fs/promises");
  const dir = await readdir("./content/pages");
  const pages = await Promise.all(pageSlugs.map((slug) => import(`/content/pages/${slug}.md`)));
  return {
    props: { pages }
  };
}
