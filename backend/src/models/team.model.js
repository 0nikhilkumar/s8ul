const { Schema, model } = require("mongoose");

const EsportsSchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    players: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Player"
        }],
        validate: {
            validator: (v) => v.length <= 7,
            message: "A team can have at most 5 players."
        }
    }
}, { timestamps: true });

const Team = model("Team", EsportsSchema);

module.exports = Team;