import foodModel from "../models/foodModel.js";

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

export { addFood };
