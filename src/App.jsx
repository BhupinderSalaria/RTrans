import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomerList from "./components/CustomerList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  //let customerList = [];
  let customerList = ["David", "Fillips", "Jack"];

  return (
    <>
      <h1>Customers List</h1>
      <ErrorMessage />
      <CustomerList />
    </>
  );
}

export default App;
