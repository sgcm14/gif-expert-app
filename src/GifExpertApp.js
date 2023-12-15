import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
