const express = require("express");
const router = express.Router();
// const { } = require('../controller/House2');
// const {}= require('../controller/House3');
const { getroom, getSingleroom, getroomUpdate, postrooms, roomdelete } = require("../controller/House3");

router.route('/getall').get(getroom);
router.route('/:id').get(getSingleroom);
router.route('/:id').patch(getroomUpdate);
router.route('/post').post(postrooms)
router.route('/:id').delete(roomdelete);

module.exports = router;