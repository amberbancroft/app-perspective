const router = require('express').Router();
// const sessionRouter = require('./session.js');
// const usersRouter = require('./users.js');
const { Photo } = require("../../db/models");

//Home Page
router.get('/home', (req, res) => {
    // Find all photos in backend
    // returns an array of photo models object
    const photoArray = await Photo.findAll({}); 

    // Passing the Array to the store in the frontend
    return res.json({
        photoArray,
    });
});

// Exports
module.exports = router;