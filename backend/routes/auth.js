const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, query, validationResult } = require('express-validator');

// use of bcryptjs
const bcrypt = require('bcryptjs');

// use of jwt with jsonwebtoken that is used for authentication 
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const secretKey = 'mysecretkey';

// Route 1 : create a user using: POST "/api/auth/createuser". NO login required
router.post('/createuser',
    [
        // Validation rules
        body('name', 'Name is required').notEmpty(),
        body('email', 'Please include a valid email').isEmail(),
        body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    ],
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success:false, errors: errors.array() });
        }

        // checked whether the user already exists with this email
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({success:false, error: "Sorry a user with this email already exists." });
            }
            // creating secure password by hashing
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            user = await User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
            await user.save();

            const data = {
                user: {
                    id: user.id
                }
            }
            // generating token using jwt
            const authtoken = jwt.sign(data, secretKey, {
                expiresIn: '1h'
            });
            res.json({success:true, authtoken: authtoken });
            // res.json(user);

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
);


// Route 2 : Authenticate a user using: POST "/api/auth/login"
router.post('/login', [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Please include a valid password').exists(),
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success:false, errors: errors.array() });
    }
    // checking whether the user exists with this email
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({success:false, error: "Please enter a valid email or password" });
        }

        // comparing the password with the hashed password
        const password = req.body.password;
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success:false,
                error: "Please enter a valid email or password"
            });
        }

        // generating token using jwt
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, secretKey, {
            expiresIn: '1h'
        });
        res.json({success:true, authtoken: authtoken });
        // res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});


// Route 3 : Get logged in User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser',fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password"); // -password means exclude it
        res.json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

});
module.exports = router;