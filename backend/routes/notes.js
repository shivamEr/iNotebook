const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// Route 1 : Get All the Notes using : GET "/api/notes/getallnotes" - Login Required
router.get('/getallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
});

// Route 2 : Add a new Note using : POST "/api/notes/addnote" - Login Required
router.post('/addnote', fetchuser, [
    body('title').isLength({ min: 3 }).withMessage('Title must be atleast 3 characters'),
    body('description').isLength({ min: 5 }).withMessage('Description must be atleast 5 characters'),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;
        const note = new Note({ title, description, tag, user: req.user.id });
        await note.save();
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});

// Route 3 : Update an existing Note using : PUT "/api/notes/update" - Login Required
router.put('/update/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed to update");
        }
        note.title = title;
        note.description = description;
        note.tag = tag;
        await note.save();
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 4 : Delete a Note using : DELETE "/api/notes/delete" - Login Required
router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and check if it exists
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed to delete");
        }
        // Delete the Note
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted successfully" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router