// Imports
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumsRouter = require('./albums.js');
// importing the router from the home.js in order to connect to the store
const homeRouter = require("./home.js");
const photoRouter = require("./photos");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
// using the imported router
router.use("/home", homeRouter);
router.use("/photos", photoRouter);
router.use('/albums', albumsRouter)

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
// Authentication stuff
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

const { restoreUser } = require('../../utils/auth.js');
router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);

const { requireAuth } = require('../../utils/auth.js');
const { route } = require('./session.js');
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

// Exporting
module.exports = router;