import React, { useState } from 'react';
import axios from 'axios';


const Update = props => {
  const [movie, setMovie] = useState({id: props.match.params.id});
  

  const changeHandler = ev => {
    

    setMovie({
      ...movie,
      [ev.target.name]: ev.target.value
    });
    console.log(movie);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const starSplitter= {
        ...movie,
        stars: movie.stars.split(", "),
    }

    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, starSplitter)
      .then(res => {
        console.log(res);
        document.querySelector('form').reset();
        props.history.push("/")
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          name="title"
          onChange={changeHandler}
          placeholder="name"
        />
        <div className="baseline" />

        <input
          type="string"
          name="director"
          onChange={changeHandler}
          placeholder="director"
        />
        <div className="baseline" />

        <input
          type="string"
          name="metascore"
          onChange={changeHandler}
          placeholder="metascore"
        />
        <div className="baseline" />

        <input
          type="string"
          name="stars"
          onChange={changeHandler}
          placeholder="stars"
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default Update;
