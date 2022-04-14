import styles from "./Header.module.css";
import MainMenu from "../pages/MainMenu";
export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.titleBar}>
        <img className={styles.icon} src="/img/stellaclarke.png" alt="Stella Clarke Icon" />
        <span className={styles.title}>Stella Clarke</span>
      </div>
      <MainMenu />
    </header>
  );
}
