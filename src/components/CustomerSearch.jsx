import styles from "./CustomerSearch.module.css";

const CustomerSearch = ({ handleOnChangeSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the customer name"
        className={styles.searchInput}
        onChange={handleOnChangeSearch}
      ></input>
    </div>
  );
};
export default CustomerSearch;
