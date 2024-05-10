const Customer = (props) => {
  let { customerInfo } = props;
  return <li className="list-group-item">{customerInfo}</li>;
};

export default Customer;
