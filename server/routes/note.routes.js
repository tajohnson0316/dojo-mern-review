const noteController = require("../controllers/note.controller");

module.exports = (app) => {
  app.get("/api/notes", noteController.findAllNotes);
  app.get("/api/notes/:id", noteController.findOneNote);
};
