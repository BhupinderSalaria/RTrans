import styles from "./Customer.module.css";

const Customer = ({ customerInfo, handleInfoByButton }) => {
  // const handleInfoButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${customerInfo} is  clicked`);
  // };

  return (
    <li className={`${styles["trans-item"]} list-group-item`}>
      <span className={styles["trans-span"]}>{customerInfo}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleInfoByButton}
      >
        Info
      </button>
    </li>
  );
};
export default Customer;
