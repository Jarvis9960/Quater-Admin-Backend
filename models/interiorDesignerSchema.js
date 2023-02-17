const mongoose = require("mongoose");


const interiorDesignerSchema = new mongoose.Schema({
    Description:{
        type: String,
        required: true
    },
    Image: {
        type: Array
    }
})


const interiorDesigner = mongoose.model("Interior Designer", interiorDesignerSchema);


module.exports = interiorDesigner;