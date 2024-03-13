const express = require("express");
const router = express.Router();
const { getroomUpdate, postrooms, roomdelete, getroom, getSingleroom } = require('../controller/House1')

router.route('/getall').get(getroom);
router.route('/:id').get(getSingleroom);
router.route('/:id').patch(getroomUpdate);
router.route('/post').post(postrooms)
router.route('/:id').delete(roomdelete);

module.exports = router;