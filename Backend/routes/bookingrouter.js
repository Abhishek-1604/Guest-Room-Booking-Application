const express = require("express");
const router = express.Router();
// const { getroomUpdate, postrooms, roomdelete, getroom, getSingleroom } = require('../controller/House1');
const { getbooking, getSinglebooking, getbookingUpdate, postbooking, bookingdelete } = require("../controller/booking");

router.route('/getall').get(getbooking);
router.route('/:id').get(getSinglebooking);
router.route('/:id').patch(getbookingUpdate);
router.route('/post/room1').post(postbooking)
router.route('/:id').delete(bookingdelete);

module.exports = router;