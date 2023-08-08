import styles from "./footer.module.css";

interface FooterProperties {
  title: string;
  footerText: string;
}

const Footer: React.FC<FooterProperties> = ({ title, footerText }) => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>{title}</h1>
      <p>{footerText}</p>
    </div>
  );
};

export default Footer;
