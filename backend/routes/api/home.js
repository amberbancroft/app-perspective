const router = require('express').Router();
const { Photo, User } = require("../../db/models");

//Home Page
router.get('/', async (req, res) => {
    // Find all photos in backend
    // returns an array of photo models object
    const photoArray = await Photo.findAll({
        include: User
    }); 

    // Passing the Array to the store in the frontend
    return res.json({
        photoArray,
    });
});

// Exports
module.exports = router;