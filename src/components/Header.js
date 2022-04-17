import * as styles from "./Header.module.css";
import MainMenu from "./MainMenu";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
export default function Header() {
  const {
    site: {
      siteMetadata: { title }
    }
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className={styles.root}>
      <div className={styles.titleBar}>
        <img className={styles.icon} src="/img/stellaclarke.png" alt="Stella Clarke Icon" />
        <span className={styles.title}>{title}</span>
      </div>
      <MainMenu />
    </header>
  );
}
