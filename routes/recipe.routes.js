const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const data = require("../data.json");

const Recipe = require("../models/Recipe.model");

// add recipe
router.post("/create-recipe", async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);

    return res.status(200).json(newRecipe);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// add data recipes
router.post("/create-posts", async (req, res) => {
  try {
    const NewRecipes = await Recipe.insertMany(data);

    return res.status(200).json(NewRecipes);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//update recipe
router.put("/update/:title/:duration", async (req, res) => {
  const { title, duration } = req.params;

  try {
    const updateRecipe = await Recipe.findOneAndUpdate(
      { title: title },
      { duration: Number(duration) },
      { new: true }
    );
    return res.status(200).json(updateRecipe);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//delete recipeg
router.delete("/delete/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const deleteRecipe = await Recipe.deleteOne({ title: title });

    return res.status(200).json(deleteRecipe);
  } catch (error) {
    return res.status(500).json(error);
  }
});
module.exports = router;
