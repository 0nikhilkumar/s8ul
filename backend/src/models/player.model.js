const { Schema, model } = require("mongoose")

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Player = model("Player", playerSchema);

module.exports = Player;