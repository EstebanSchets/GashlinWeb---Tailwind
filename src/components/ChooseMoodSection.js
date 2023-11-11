import styles from "./ChooseMoodSection.module.css";

const ChooseMoodSection = () => {
  return (
    <div className={styles.rectangleParent}>
      <button className={styles.groupChild} />
      <button className={styles.button} />
      <button className={styles.groupItem} />
      <button className={styles.groupInner} />
      <h3 className={styles.choose}>{`CHOOSE. `}</h3>
      <h3 className={styles.your}>YOUR.</h3>
      <h3 className={styles.mood}>MOOD.</h3>
      <button className={styles.rectangleButton} />
      <button className={styles.groupChild1} />
      <button className={styles.groupChild2} />
      <button className={styles.groupChild3} />
      <h3 className={styles.trippy}>TRIPPY</h3>
      <h3 className={styles.dark}>DARK</h3>
      <h3 className={styles.hard}>HARD</h3>
      <h3 className={styles.chill}>CHILL</h3>
    </div>
  );
};

export default ChooseMoodSection;
