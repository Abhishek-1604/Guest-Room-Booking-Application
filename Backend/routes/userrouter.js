const express = require('express')
const { userRegister, loginUser, getreg, getlogin, regdelete } = require('../controller/usercontroller')

const router = express.Router()

router.route('/reg').post(userRegister)
router.route('/reg/getall').get(getreg)
router.route('/login').post(loginUser)
router.route('/login/getall').get(getlogin)
router.route('/:id').delete(regdelete)

module.exports = router