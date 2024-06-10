import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerList from "./components/CustomerList";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import CustomerSearch from "./components/CustomerSearch";
import { useState } from "react";

function App() {
  //let customerList = [];
  // let customerList = ["David", "Fillips", "Jack"];

  let [textToShow, setTextToShow] = useState("Search For Customer : ");

  let [customerList, setcustomerList] = useState([
    "David",
    "Fillips",
    "Jack",
    " Phil",
  ]);

  const handleOnChangeSearch = (event) => {
    console.log(event.target.value);
    setTextToShow(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCustomer = event.target.value;
      event.target.value = "";
      let newCustomerList = [...customerList, newCustomer];
      setcustomerList(newCustomerList);
    }
  };

  return (
    <>
      <Container>
        <h1 className="app-heading">Customers List</h1>
        <ErrorMessage customers={customerList} />
        <CustomerSearch
          handleOnChangeSearch={handleOnChangeSearch}
          handleKeyDown={handleKeyDown}
        ></CustomerSearch>
        <CustomerList customers={customerList} />
      </Container>
      <Container>
        <p> These are the customer list. we need to keep safe.</p>
      </Container>
    </>
  );
}

export default App;
