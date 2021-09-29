// Imports
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Photo, User, Album } = require('../../db/models');
// const { singleMulterUpload } = require('../../awsS3');

// Variable declaration
const router = express.Router();

// Validations
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  // Added it here for the confirmPassword field
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Confirm Password cannot be empty')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
  handleValidationErrors,
];

// Sign up
// Post /api/users ---Sign up
router.post(
  "/",
  // singleMulterUpload("image"),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    // const profileImageUrl = await singlePublicFileUpload(req.file);

    const user = await User.signup({
      username,
      email,
      password,
      // profileImageUrl,
    });

    setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

//Photos for users profile page
router.get('/:id(\\d+)', async (req, res) => {
  // getting userId
  // req.params.id grabs the id from the url
  const userId = parseInt(req.params.id,10);
  
  // Find all photos the belong to that user
  const userPhotos = await Photo.findAll({
    where: {
        userId
    },
    include: User,
  });
  // console.log("***************************************", userPhotos);
  // Passing the Array to the store in the frontend
  return res.json(userPhotos);
});

// Get User info for profile page
router.get('/:id(\\d+)', async (req, res) => {
  // getting userId
  // req.params.id grabs the id from the url
  const userId = parseInt(req.params.id,10);
  
  // Find all photos the belong to that user
  const userInfo = await User.findAll({
    where: {
        userId
    },
  });
  // console.log("***************************************", userPhotos);
  // Passing the Array to the store in the frontend
  return res.json(userInfo);
});
 
// Exports
module.exports = router;