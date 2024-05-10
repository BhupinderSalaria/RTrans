const ErrorMessage = () => {
  let customerList = ["David", "Fillips", "Jack"];

  return <> {customerList.length == 0 && <h3>No customer found</h3>} </>;
};

export default ErrorMessage;
