import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  const displaySongs = async () => {
    try {
      const response = await axios.get("https://localhost:7081/api/Songs");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in displaySongs request: ", error);
    }
  };

  useEffect(() => {
    displaySongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MusicTable songs={songs} />
      <AddSongForm onNewSong={displaySongs} />
    </div>
  );
}

export default App;
