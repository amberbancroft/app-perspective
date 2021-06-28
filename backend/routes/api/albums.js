// Imports
const router = require('express').Router();
const { Photo, User, Album } = require("../../db/models");
// const { singleMulterUpload, singlePublicFileUpload} = require('../../awsS3');

//Albums for users profile page
router.get('/user/:id(\\d+)', async (req, res) => {
  // getting userId
  // req.params.id grabs the id from the url
  const id = parseInt(req.params.id, 10);
  
  // Find all photos the belong to that user
  const userAlbums = await Album.findAll({
    where: {
        userId: id
    },
    include: Photo
  });
  // console.log("***************************************", userAlbums);
  // Passing the Array to the store in the frontend
  return res.json(userAlbums);
});

// Individual albums page
router.get('/:id(\\d+)', async (req, res) => {
    // extract the albumId
    const albumId = parseInt(req.params.id,10);

    // Find all albums in backend
    const singleAlbum = await Album.findByPk(albumId, {
        include: Photo
    })

    // Normalized object
    const photos = {}
    singleAlbum.Photos.forEach(eachPhoto => {
      photos[eachPhoto.id] = eachPhoto
    });

    // console.log('single album', photos)
    // Passing the Array to the store in the frontend
    return res.json({singleAlbum, photos});
});

// Individual Albums edit page
router.get('/:id(\\d+)/edit', async (req, res) => {
  // extract the photoId
  const albumId = parseInt(req.params.id,10);

  // Find all photos in backend
  const singleAlbumForEdit = await Album.findByPk(albumId,  {
      include: User
  })
  // console.log("***************************************", singleAlbumForEdit);

  // Passing the Array to the store in the frontend
  return res.json(singleAlbumForEdit);
});

router.put(
  "/:id(\\d+)/edit",
  async (req, res) => {
    const { title } = req.body;
    const albumId = parseInt(req.params.id,10);
    const currentAlbum = await Album.findByPk(albumId);

    await currentAlbum.update({
      title
    });

    res.json(currentAlbum);
})

//Delete single photo
router.delete('/:id(\\d+)/delete', async (req, res) => {
  const albumId = parseInt(req.params.id,10);
  const deleteAlbum = await Album.findByPk(albumId);

  await deleteAlbum.destroy()

  // This shows no content was found successfully
  res.status(204).end()

  // res.json(deletePhoto);
});

// Individual new albums
router.post(
  "/new",
  // singleMulterUpload('imgUrl'),
  async (req, res) => {
    const { userId, title, description } = req.body;
    // const imgUrl = await singlePublicFileUpload(req.file)
    const data = { userId, title, description }
    const newAlbum = await Album.create(data);
    // const album = await Album.findByPk(newAlbum.id, {
    //     include:User
    // });

  res.json(newAlbum);
})


// Exports
module.exports = router;