import React from "react";
import { useState } from "react";
const Searchbar = (props) => {
  const { onChange } = props;
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="buscar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default Searchbar;
