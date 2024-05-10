import Customer from "./Customer";

const CustomerList = () => {
  let customerList = ["David", "Fillips", "Jack"];
  return (
    <ul className="list-group">
      {customerList.map((item) => (
        <Customer key={item} customerInfo={item}></Customer>
      ))}
    </ul>
  );
};

export default CustomerList;
