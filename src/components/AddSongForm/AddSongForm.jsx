const AddSongForm = ({}) => {
  return (
    <div>
      <h4>Add a Song</h4>
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Artist</label>
          <input type="text" />
        </div>
        <div>
          <label>Album</label>
          <input type="text" />
        </div>
        <div>
          <label>Genre</label>
          <input type="text" />
        </div>
        <div>
          <label>Release Date</label>
          <input type="text" />
        </div>
        <button>Add Song</button>
      </form>
    </div>
  );
};

export default AddSongForm;
