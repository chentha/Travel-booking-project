import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

// router.post("/", async(req, res) => {
//   const newHotel = new Hotel(req.body);

//   try{
//     const SaveHotel = await newHotel.save();
//     res.status(200).json(SaveHotel);
//   }catch(err){
//     res.status(500).json(err);
//   }
// });

// router.put("/:id", async(req, res) => {

//   try{
//     const UpdateHotel = await Hotel.findByIdAndUpdate (req.params.id, {$set: req.body},{new: true});
//     res.status(200).json(UpdateHotel);
//   }catch(err){
//     res.status(500).json(err);
//   }
// });

// router.delete("/:id", async(req, res) => {

//   try{
//     await Hotel.findByIdAndDelete (req.params.id, );
//     res.status(200).json("Hotel has been delete");
//   }catch(err){
//     res.status(500).json(err);
//   }
// });



// router.get("/:id", async(req, res) => {

//   try{
//     const hotel = await Hotel.findById (req.params.id);
//     res.status(200).json(hotel);
//   }catch(err){
//     res.status(500).json(err);
//   }
// });


// router.get("/", async(req, res, next) => {

//   console.log("hi im a hotel routes");

//   next()
//   try{
//     const hotels = await Hotel.find ();
//     res.status(200).json(hotels);
//   }catch(err){
//     res.status(500).json(err);
//   }
// });
//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);

router.get("/", getHotels);
//GET ALL

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
