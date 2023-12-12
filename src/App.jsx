import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import React from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
