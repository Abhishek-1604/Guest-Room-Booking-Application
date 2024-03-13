const mongoose = require('mongoose');
const bookingModel2 = require('../model/bookingmodel2');

// Get all Values
exports.getbooking2 = async (req, res) => {
  const bookingData2 = await bookingModel2.find({});
  res.json(bookingData2);
};
// Get a Single Data
exports.getSinglebooking2 = async (req, res) => {
  const { id } = req.params;

  try {
    const bookingData2 = await bookingModel2.findById(id);
    res.status(200).json(bookingData2);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

// Post the data
exports.postbooking2 = async (req, res) => {
  console.log("post function inside");

  const { checkin, checkout, username, mobilenumber, rentperday, totalrent } = req.body;

  try {
    const val = await bookingModel2.create({ checkin, checkout, username, mobilenumber, rentperday, totalrent });
    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};


exports.getbookingUpdate2 = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ msg: "Tasknot found" });
  }
  try {
    const bookingData2 = await bookingModel2.findByIdAndUpdate(
      {
        _id: id
      },
      {
        ...req.body,
      }
    );
    res.status(200).json({ msg: "updated" });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

// Delete the Data
exports.bookingdelete2 = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ "msg": "Task not Found" })
  }

  try {
    const bookingData2 = await bookingModel2.findByIdAndDelete(id)
    res.status(200).json({ msg: "deleted" })
  }
  catch (e) {
    res.status(400).json({ "msg": e.message })
  }
}