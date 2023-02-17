const mongoose = require("mongoose");

const two_D_DesignHindiSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: Array,
  },
});

const two_D_DesignHindi = mongoose.model(
  "2-D Design Hindi",
  two_D_DesignHindiSchema
);

module.exports = two_D_DesignHindi;
