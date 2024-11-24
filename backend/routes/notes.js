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
        const note = new Note({title,description,tag, user:req.user.id});
        await note.save();
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});



module.exports = router