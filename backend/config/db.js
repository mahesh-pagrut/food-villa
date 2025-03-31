import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yum-store:yum-store@cluster0.sgt6xlb.mongodb.net/yum-store");
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
