import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />

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
