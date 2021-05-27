const router = require('express').Router();
const { Photo, User } = require("../../db/models");

//Photos home Page
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

// Individual photos page
router.get('/:id(\\d+)', async (req, res) => {
    // extract the photoId
    const photoId = parseInt(req.params.id,10);
    // console.log("***************************************", photoId);

    // Find all photos in backend
    const singlePhoto = await Photo.findByPk(photoId,  {
        include: User
    })
    console.log("***************************************", singlePhoto);

    // Passing the Array to the store in the frontend
    return res.json(singlePhoto);
});



// Exports
module.exports = router;