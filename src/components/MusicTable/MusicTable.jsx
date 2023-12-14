import axios from "axios";
import React from "react";
import "./MusicTable.css";

const MusicTable = ({ songs }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7081/api/Songs`);
    } catch (error) {
      console.warn("Error deleting song: ", error);
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{song.releaseDate}</td>
            <td>
              <button onClick={handleDelete}>Delete Song</button>
            </td>
            <td>
              <button>Edit Song</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;
