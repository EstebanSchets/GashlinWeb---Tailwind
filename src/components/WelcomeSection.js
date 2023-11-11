import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={styles.lineParent}>
      <img className={styles.groupChild} alt="" src="/line-1.svg" />
      <h2 className={styles.welcome}>WELCOME</h2>
    </div>
  );
};

export default WelcomeSection;
