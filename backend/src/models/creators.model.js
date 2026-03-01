const { Schema, model } = require("mongoose");

const creatorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
        unique: true,
    },
    instagram_url: {
        type: String,
    },
    youtube_url: {
        type: String,
    },
}, { timestamps: true });