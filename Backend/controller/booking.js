const mongoose = require('mongoose');
const bookingModel1 = require('../model/bookingmodel');

// Get all Values
exports.getbooking = async (req, res) => {
    const bookingData = await bookingModel1.find({});
    res.json(bookingData);
  };
  // Get a Single Data
exports.getSinglebooking = async (req, res) => {
    const { id } = req.params;
  
    try {
      const bookingData = await bookingModel1.findById(id);
      res.status(200).json(bookingData);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };

  // Post the data
exports.postbooking = async (req, res) => {
    console.log("post function inside");
  
    const { checkin, checkout, username, mobilenumber, rentperday, totalrent } = req.body;
  
    try {
      const val = await bookingModel1.create({ checkin, checkout, username, mobilenumber, rentperday, totalrent });
      res.status(200).json({msg:"success"});
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };


exports.getbookingUpdate = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ msg: "Tasknot found" });
    }
    try {
      const bookingData = await bookingModel1.findByIdAndUpdate(
        {
          _id: id
        },
        {
          ...req.body,
        }
      );
      res.status(200).json({msg:"updated"});
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };

  // Delete the Data
exports.bookingdelete = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"msg":"Task not Found"})
    }

    try{
        const bookingData = await bookingModel1.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted"})
    }
    catch(e){
        res.status(400).json({"msg":e.message})
    }
}