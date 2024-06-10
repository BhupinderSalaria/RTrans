import styles from "./CustomerSearch.module.css";

const CustomerSearch = ({ handleOnChangeSearch, handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the customer name"
        className={styles.searchInput}
        onChange={handleOnChangeSearch}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};
export default CustomerSearch;
