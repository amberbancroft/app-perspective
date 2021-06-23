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
// router.get('/:id(\\d+)/edit', async (req, res) => {
//   // extract the photoId
//   const photoId = parseInt(req.params.id,10);

//   // Find all photos in backend
//   const singlePhotoForEdit = await Photo.findByPk(photoId,  {
//       include: User
//   })
//   // console.log("***************************************", singlePhoto);

//   // Passing the Array to the store in the frontend
//   return res.json(singlePhotoForEdit);
// });

// router.put(
//   "/:id(\\d+)/edit",
//   async (req, res) => {
//     const { title } = req.body;
//     const photoId = parseInt(req.params.id,10);
//     const currentPhoto = await Photo.findByPk(photoId);

//     await currentPhoto.update({
//       title
//     });

//     res.json(currentPhoto);
// })

//Delete single photo
router.delete('/:id(\\d+)/delete', async (req, res) => {
  const albumId = parseInt(req.params.id,10);
  const deleteAlbum = await Album.findByPk(albumId);

  await deleteAlbum.destroy()

  // This shows no content was found successfully
  res.status(204).end()

  // res.json(deletePhoto);
});

// // Individual photos new page
// router.post(
//   "/new",
//   singleMulterUpload('imgUrl'),
//   async (req, res) => {
//     const { userId, title } = req.body;
//     const imgUrl = await singlePublicFileUpload(req.file)
//   //   console.log("!!!!!!!!!!!!", imgUrl);
//     const data = {userId, title, imgUrl }
//     const newPhoto = await Photo.create(data);
//     const photo = await Photo.findByPk(newPhoto.id, {
//         include:User
//     });

//   res.json(photo);
// })


// Exports
module.exports = router;