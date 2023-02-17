const mongoose = require("mongoose");


const interiorDesignerHindiSchema = new mongoose.Schema({
    Description:{
        type: String,
        required: true
    },
    Image: {
        type: Array
    }
})


const interiorDesignerHindi = mongoose.model("Interior Designer Hindi", interiorDesignerHindiSchema);


module.exports = interiorDesignerHindi;