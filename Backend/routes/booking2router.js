const express = require("express");
const { getbooking2, getSinglebooking2, getbookingUpdate2, postbooking2, bookingdelete2 } = require("../controller/booking2");
const router = express.Router();

router.route('/getall').get(getbooking2);
router.route('/:id').get(getSinglebooking2);
router.route('/:id').patch(getbookingUpdate2);
router.route('/post').post(postbooking2);
router.route('/:id').post(bookingdelete2);

module.exports = router;