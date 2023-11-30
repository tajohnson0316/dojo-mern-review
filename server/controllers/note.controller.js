// The controller handles CRUD operations for the DB

// Import the model here
const { response } = require("express");
const Note = require("../models/note.model");

// *** READ ALL ***
module.exports.findAllNotes = (_request, response) => {
  Note.find()
    .then((allNotes) => {
      console.log({ results: allNotes });
      response.status(200).json({ results: allNotes });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** READ ONE ***
module.exports.findOneNote = (request, response) => {
  Note.findById(request.params.id)
    .then((note) => {
      console.log({ results: note });
      response.status(200).json({ results: note });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

// *** CREATE ONE ***
module.exports.createNewNote = (request, response) => {
  Note.create(request.body)
    .then((newNote) => {
      console.log({ results: newNote });
      response.status(200).json({ results: newNote });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};
