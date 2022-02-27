const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model");

async function connect() {
  const MONGODB_URI = "mongodb://localhost:27017/recipe-app";
  try {
    const connection = await mongoose.connect(MONGODB_URI);

    console.log(`Connected to the database: "${connection.connection.name}"`);
    return Recipe.deleteMany();
  } catch (error) {
    console.error("Erro para connectar ao banco de dados", error);
  }
}

module.exports = connect;
