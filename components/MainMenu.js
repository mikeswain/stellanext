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
  const dir = await readdir("./content/pages");
  const pages = await Promise.all(dir.map((md) => import(md)));
  return {
    props: {
      pages: md.filter(({ attributes: { enabled } }) => enabled).map(({ attributes: { title, slug } }) => ({ slug, title }))
    }
  };
}
