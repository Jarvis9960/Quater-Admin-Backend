const mongoose = require("mongoose");

const hireSiteEngineerSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: Array,
  },
});

const hireSiteEngineer = mongoose.model(
  "Hire Site Engineer",
  hireSiteEngineerSchema
);

module.exports = hireSiteEngineer;
