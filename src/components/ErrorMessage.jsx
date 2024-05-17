const ErrorMessage = ({ customers }) => {
  return <> {customers.length == 0 && <h3>No customer found</h3>} </>;
};

export default ErrorMessage;
