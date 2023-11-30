// import mongoose to build the model
const mongoose = require("mongoose");

// The model - i.e., the rules the DB entries must follow
const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title field is required"],
      minlength: [2, "Title field requires a minimum of 2 characters"],
    },
    content: {
      type: String,
      required: [true, "Name field is required"],
      minlength: [2, "Content field requires a minimum of 2 characters"],
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
