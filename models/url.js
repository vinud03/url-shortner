const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectedUrl: {
        type: String,
        required: true
    },
    cretaedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    visitHistory: [{ timestamp: {type: Number}}]
});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;