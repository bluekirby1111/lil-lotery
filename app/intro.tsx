import styles from "./intro.module.css";

interface IntroProperties {
  introText: string;
}

const Intro: React.FC<IntroProperties> = ({ introText }) => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.introText}>{introText}</h1>
    </div>
  );
};

export default Intro;
