const express = require('express');
const router = express.Router();

// Dummy user profile data
let userProfile = {};

router.get('/', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    res.render('profile', { user: req.session.user, profile: userProfile });
});

router.get('/edit', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    res.render('edit-profile', { profile: userProfile });
});

router.post('/update', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    userProfile = req.body;
    res.redirect('/profile');
});

router.get('/delete', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/auth/login');
    }
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
