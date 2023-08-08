import styles from "./header.module.css";

interface HeaderProperties {
  title: string;
}

const navigationItems = ["FAQ", "About us", "Contact"].map((key) => (
  <li className={styles.navItems}>
    <a href="">{key}</a>
  </li>
));

const Header: React.FC<HeaderProperties> = ({ title }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <nav>
        <ul className={styles.navList}>{navigationItems}</ul>
      </nav>
    </div>
  );
};

export default Header;
