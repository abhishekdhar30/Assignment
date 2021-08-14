const express = require('express')
const router = express.Router()

const { registerUser, authUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/signup')
.post(registerUser)


router.route('/login')
.post(authUser)

router.route('/home')
.get(protect)

module.exports=router