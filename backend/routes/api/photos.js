// Imports
const router = require('express').Router();
const { Photo, User } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload} = require('../../awsS3');

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

    // Find all photos in backend
    const singlePhoto = await Photo.findByPk(photoId,  {
        include: User
    })

    // Passing the Array to the store in the frontend
    return res.json(singlePhoto);
});

// Individual photos edit page
router.get('/:id(\\d+)/edit', async (req, res) => {
    // extract the photoId
    const photoId = parseInt(req.params.id,10);

    // Find all photos in backend
    const singlePhotoForEdit = await Photo.findByPk(photoId,  {
        include: User
    })

    // Passing the Array to the store in the frontend
    return res.json(singlePhotoForEdit);
});

router.put(
    "/:id(\\d+)/edit",
    async (req, res) => {
      const { title } = req.body;
      const photoId = parseInt(req.params.id,10);
      const currentPhoto = await Photo.findByPk(photoId);
  
      await currentPhoto.update({
        title
      });
  
      res.json(currentPhoto);
})

//Delete single photo
router.delete('/:id(\\d+)/delete', async (req, res) => {
    const photoId = parseInt(req.params.id,10);
    const deletePhoto = await Photo.findByPk(photoId);

    await deletePhoto.destroy()

    // This shows no content was found successfully
    res.status(204).end()

    // res.json(deletePhoto);
});

// Individual photos new page
router.post(
    "/new",
    singleMulterUpload('imgUrl'),
    async (req, res) => {
      const { userId, title } = req.body;
      const imgUrl = await singlePublicFileUpload(req.file)
      const data = {userId, title, imgUrl }
      const newPhoto = await Photo.create(data);
      const photo = await Photo.findByPk(newPhoto.id, {
          include:User
      });
  
    res.json(photo);
})

// Exports
module.exports = router;