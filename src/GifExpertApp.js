import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = (props) => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = (e) => {
  //   setCategories([...categories, "holi"]);
  //   // setCategories(["holi", ...categories]);
  //   // setCategories(cats =>[...cats,"holi"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
    <AddCategory/>
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
