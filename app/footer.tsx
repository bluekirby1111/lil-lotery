import styles from "./footer.module.css";

interface HeaderProperties {
  displayText: string;
}

const Footer: React.FC<HeaderProperties> = ({ displayText }) => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>{displayText}</h1>
      <p>© Lightning Lottery. Made in 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
