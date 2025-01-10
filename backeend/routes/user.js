const express = require('express');
const router = express.Router(); 
const User = require('../model/User'); 
const { createHmac } = require('crypto');
const { createusertoken } = require('../services/authuntication');

router.get("/signin", (req, res) => {
    res.render("signin");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;

    try {
        await User.create({ username, password, email });
        res.render('signin')
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).render('signup', { error: "Error creating user. Please try again." });
    }
});
router.post("/signin", async function (req, res) {
    const { password, email } = req.body;

    try {
        const token = await User.mismatch(email, password); 
        
        if (token) {
            
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 

            return res.redirect('/');  
        } else {
            return res.render('signin', { error: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        return res.status(500).render('signin', { error: "An error occurred during sign-in" });
    }
});


router.get("/logout", (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;