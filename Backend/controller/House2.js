const mongoose = require('mongoose');
const house2Model = require('../model/house2model');

// Get all Values
exports.getroom = async (req, res) => {
    const house2Data = await house2Model.find({});
    res.json(house2Data);
  };
  // Get a Single Data
exports.getSingleroom = async (req, res) => {
    const { id } = req.params;
  
    try {
      const house2Data = await house2Model.findById(id);
      res.status(200).json(house2Data);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };

  // Post the data
exports.postrooms = async (req, res) => {
    console.log("post function inside");
  
    const { roomnumber, floorsize, numberofbeds, amenities, image,image1, image2, image3,description} = req.body;
  
    try {
      const val = await house2Model.create({ roomnumber, floorsize, numberofbeds, amenities, image,image1, image2, image3,description})
      res.status(200).json({msg:"success"});
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  };


exports.getroomUpdate = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ msg: "Tasknot found" });
    }
    try {
      const house2Data = await house2Model.findByIdAndUpdate(
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
exports.roomdelete = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({"msg":"Task not Found"})
    }

    try{
        const house2Data = await house2Model.findByIdAndDelete(id)
        res.status(200).json({msg:"deleted"})
    }
    catch(e){
        res.status(400).json({"msg":e.message})
    }
}