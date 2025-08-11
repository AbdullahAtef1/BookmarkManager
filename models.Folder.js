const mongoose = require("mongoose");

const folderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  bookmarks: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Bookmark",
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model("Folder", folderSchema);
