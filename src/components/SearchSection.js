import styles from "./SearchSection.module.css";

const SearchSection = () => {
  return (
    <div className={styles.path1Parent}>
      <input className={styles.path1} type="text" />
      <h1 className={styles.search}>Search...</h1>
    </div>
  );
};

export default SearchSection;
