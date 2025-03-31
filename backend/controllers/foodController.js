import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add Food Item
const addFood = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request File:", req.file); // Debugging

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: `/uploads/${image_filename}`, // Store image path
    });

    await food.save();
    res.status(201).json({ success: true, message: "Food Added", image: `/uploads/${image_filename}` });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// all food list
const listFood = async (req, res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//remove food item 
const removeFood = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id);
  
      if (!food) {
        return res.status(404).json({ success: false, message: "Food item not found" });
      }
  
      // Remove Image File (Ensure correct path)
      const imagePath = path.join(path.resolve(), food.image); // Full absolute path
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
  
      // Remove from Database
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Food Removed" });
  
    } catch (error) {
      console.error("Error removing food:", error);
      res.status(500).json({ success: false, message: "Error removing food" });
    }
  };
  
export { addFood, listFood, removeFood };
