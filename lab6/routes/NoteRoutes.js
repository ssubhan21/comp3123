const express = require("express");
const NoteModel = require('../models/notesModel.js');

const noteRoute = express.Router();

noteRoute.post('/', async (req, res) => {
    try {
        const newNote = new NoteModel(req.body);
        await newNote.save();
        return res.status(201).send({ status: true, message: "Note created successfully." });
    } catch (ex) {
        console.error(ex);
        return res.status(500).send({ message: "Note was not in the correct format", details: ex.toString() });
    }
});

noteRoute.get('/', async (req, res) => {
    try {
        return res.status(200).send(await NoteModel.find());
    } catch (ex) {
        console.error(ex);
        return res.status(500).send({ message: "There was an error with the database", details: ex.toString() });
    }
});

//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoute.get('/:noteId', async (req, res) => {
    try {
        return res.status(200).send(await NoteModel.findOne({ "_id": req.params.noteId }));
    } catch (ex) {
        console.error(ex);
        return res.status(500).send({ message: "There was a problem finding", details: ex.toString() });
    }
});

//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoute.put('/:noteId', async (req, res) => {
    try {
        const noteVal = new NoteModel(req.body);
        const val = noteVal.validateSync();
        if (!!val) throw val;

        const status = await NoteModel.updateOne({ _id: req.params.noteId }, {
            $set: {
                noteTitle: noteVal.noteTitle,
                noteDescription: noteVal.noteDescription,
                priority: noteVal.priority,
                dateUpdated: new Date(Date.now())
            }
        });
        return res.status(200).send({
            status: status.nModified === 1,
            message: status.nModified === 1 ? "Note updated successfully." : "Note not found."
        });
    } catch (ex) {
        console.error(ex);
        return res.status(500).send({ message: "There was a problem while updating.", details: ex.toString() });
    }
});

//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoute.delete('/:noteId', async (req, res) => {
    try {
        const status = await NoteModel.deleteOne({ _id: req.params.noteId });
        return res.status(200).send({
            status: status.deletedCount === 1,
            message: status.deletedCount === 1 ? "Note deleted successfully." : "Note not found."
        });
    } catch (ex) {
        console.error(ex);
        return res.status(500).send({ message: "There was a problem while deleting.", details: ex.toString() });
    }
});

module.exports = noteRoute;