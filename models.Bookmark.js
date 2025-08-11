const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15
  },
  description: {
    type: String,
    maxlength: 100
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  folderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Folder",
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model("Bookmark", bookmarkSchema);
