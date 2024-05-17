import styles from "./Customer.module.css";

const Customer = (props) => {
  let { customerInfo } = props;
  return (
    <li className={`${styles["trans-item"]} list-group-item`}>
      <span className={styles["trans-span"]}>{customerInfo}</span>
    </li>
  );
};

export default Customer;
