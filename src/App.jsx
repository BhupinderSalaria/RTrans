import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerList from "./components/CustomerList";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import CustomerSearch from "./components/CustomerSearch";

function App() {
  //let customerList = [];
  let customerList = ["David", "Fillips", "Jack"];

  let textToShow = "Search For Customer : ";

  const handleOnChangeSearch = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="app-heading">Customers List</h1>
        <ErrorMessage customers={customerList} />
        <CustomerSearch
          handleOnChangeSearch={handleOnChangeSearch}
        ></CustomerSearch>
        <p>{textToShow}</p>
        <CustomerList customers={customerList} />
      </Container>
      <Container>
        <p> These are the customer list. we need to keep safe.</p>
      </Container>
    </>
  );
}

export default App;
