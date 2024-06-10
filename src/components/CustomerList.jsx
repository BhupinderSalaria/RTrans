import { useState } from "react";
import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  let [selectedCustomers, setSelectedCustomer] = useState([]);

  let onInfoButtonClick = (item, event) => {
    let newSelectedCust = [...selectedCustomers, item];
    setSelectedCustomer(newSelectedCust);
  };

  return (
    <ul className="list-group">
      {customers.map((item) => (
        <Customer
          key={item}
          customerInfo={item}
          selected={selectedCustomers.includes(item)}
          handleInfoByButton={(event) => onInfoButtonClick(item, event)}
        ></Customer>
      ))}
    </ul>
  );
};

export default CustomerList;
