const mongoose = require("mongoose");

const two_D_DesignSchema = new mongoose.Schema({
    Description:{
        type: String,
        required: true
    },
    Image: {
        type: Array
    }
})


const two_D_Design = mongoose.model("2-D Design", two_D_DesignSchema);


module.exports = two_D_Design