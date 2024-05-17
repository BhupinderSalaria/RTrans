import Customer from "./Customer";

const CustomerList = ({ customers }) => {
  return (
    <ul className="list-group">
      {customers.map((item) => (
        <Customer key={item} customerInfo={item}></Customer>
      ))}
    </ul>
  );
};

export default CustomerList;
