const express = require("express");
const { getsubscribe, postsubscribe } = require("../controller/subscribe");
const router = express.Router();




router.route('/get').get(getsubscribe);
router.route('/post').post(postsubscribe);

module.exports = router;