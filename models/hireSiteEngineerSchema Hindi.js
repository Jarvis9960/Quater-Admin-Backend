const mongoose = require("mongoose");

const hireSiteEngineerHindiSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: Array,
  },
});

const hireSiteEngineerHindi = mongoose.model(
  "Hire Site Engineer Hindi",
  hireSiteEngineerHindiSchema
);

module.exports = hireSiteEngineerHindi;
