let mongoose = require("mongoose");

// create model of projects
let projects_model = mongoose.Schema(
  {
    "title": String,
    "description": String,
    "deadline": String,
  },
  {
    collection: "projects",
  }
);

module.exports = mongoose.model("Projects", projects_model);
