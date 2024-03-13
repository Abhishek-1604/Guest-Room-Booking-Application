const mongoose = require("mongoose");
const subscribeModel = require("../model/subscribe");


exports.getsubscribe = async (req, res) => {
  const subscribeData = await subscribeModel.find({});
  res.json(subscribeData);
};


exports.postsubscribe = async (req, res) => {
  console.log("post function inside");

  const { subscribe } = req.body;

  try {
    const val = await subscribeModel.create({ subscribe });
    res.status(200).json({msg:"success"});
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};