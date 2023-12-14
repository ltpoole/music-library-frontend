import React, { useState } from "react";
import axios from "axios";
import TextField from "../TextField/TextField";
import "./AddSongForm.css";

const AddSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      genre,
      releaseDate,
    };

    try {
      const response = await axios.post(
        `https://localhost:7081/api/Songs`,
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new song form: ", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Add a Song</h4>
      <div>
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <TextField
          label="Release Date"
          value={releaseDate}
          onChange={setReleaseDate}
          type="date"
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
