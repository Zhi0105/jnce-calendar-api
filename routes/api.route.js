const router = require('express').Router();
const { google } = require('googleapis')

const REACT_APP_GOOGLE_OAUTH_CLIENT_ID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID
const REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET

const oauth2Client = new google.auth.OAuth2(
  REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
  REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET,
  process.env.REACT_APP_LOCAL_BASE_URL
)

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req, res, next) => {
  try {
    const { code } = req.body 
    const {tokens} = await oauth2Client.getToken(code)
    res.send(tokens)
  } catch (error) {
    next(error)
  }
})

// router.post('/create-event', async (req, res, next) => {
//   try {

//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router;
