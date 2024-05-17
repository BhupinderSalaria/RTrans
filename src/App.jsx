import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerList from "./components/CustomerList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  //let customerList = [];
  let customerList = ["David", "Fillips", "Jack"];

  return (
    <>
      <h1 className="app-heading">Customers List</h1>
      <ErrorMessage customers={customerList} />
      <CustomerList customers={customerList} />
    </>
  );
}

export default App;
