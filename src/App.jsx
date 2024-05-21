import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerList from "./components/CustomerList";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import CustomerSearch from "./components/CustomerSearch";

function App() {
  //let customerList = [];
  let customerList = ["David", "Fillips", "Jack"];

  return (
    <>
      <Container>
        <h1 className="app-heading">Customers List</h1>
        <ErrorMessage customers={customerList} />
        <CustomerSearch></CustomerSearch>
        <CustomerList customers={customerList} />
      </Container>
      <Container>
        <p> These are the customer list. we need to keep safe.</p>
      </Container>
    </>
  );
}

export default App;
