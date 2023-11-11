import SearchSection from "../components/SearchSection";
import WelcomeSection from "../components/WelcomeSection";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import ChooseMoodSection from "../components/ChooseMoodSection";
import styles from "./Web19201.module.css";

const Web19201 = () => {
  return (
    <main className={styles.web19201}>
      <img
        className={styles.dalle20231111203316A}
        alt=""
        src="/LPImage@2x.jpg"
      />
      <div className={styles.div} />
      <SearchSection />
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <WelcomeSection />
      <img className={styles.path2Icon} alt="" src="/undefined.png" />
      <Logo />
      <div className={styles.div4} />
      <NavBar />
      <ChooseMoodSection />
    </main>
  );
};

export default Web19201;
