import styles from "./header.module.css";

interface HeaderProperties {
  displayText: string;
}

const navigationItems = ["FAQ", "About us", "Contact"].map((key) => ({
  key,
  label: key,
}));

const Header: React.FC<HeaderProperties> = ({ displayText }) => {
  return (
    <div className={styles.header}>
      <h1>lightning</h1>
      <nav></nav>
    </div>
  );
};

export { Header };
