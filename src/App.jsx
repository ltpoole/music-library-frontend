import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MusicTable />
      <AddSongForm />
    </div>
  );
}

export default App;
