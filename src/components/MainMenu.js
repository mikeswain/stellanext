import * as styles from "./MainMenu.module.css";
import React from "react";
export default function MainMenu({ pages }) {
  return (
    <nav className={styles.root}>
      {pages &&
        pages.map(({ slug, title }, i) => (
          <a key={i} href={`/page/${slug}`}>
            {title}
          </a>
        ))}
    </nav>
  );
}
