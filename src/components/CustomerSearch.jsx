import styles from "./CustomerSearch.module.css";

const CustomerSearch = () => {
  const handleOnChangeSearch = (event) => {
    console.log(event.target.value);
  };

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
