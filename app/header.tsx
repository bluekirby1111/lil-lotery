import styles from "./header.module.css";

interface HeaderProperties {
  displayText: string;
}

const navigationItems = ["FAQ", "About us", "Contact"].map((key) => (
  <li className={styles.navItems}>
    <a href="">{key}</a>
  </li>
));

const Header: React.FC<HeaderProperties> = ({ displayText }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>lightning</h1>
      <nav>
        <ul className={styles.navList}>{navigationItems}</ul>
      </nav>
    </div>
  );
};

export { Header };
