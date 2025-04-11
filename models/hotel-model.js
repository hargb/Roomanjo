import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Corrected 'string' to 'String'
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String, // Corrected 'string' to 'String'
      required: true,
      trim: true,
    },
    banner: {
      type: String, // Corrected 'string' to 'String'
      required: true,
    },
    gallery: [
      {
        type: String, // Corrected 'string' to 'String'
      },
    ],
    price: {
      type: Number, // Number was already correct
      required: true,
    },
    facilities: [
      {
        img: String,
        name: String,
      },
    ],
    city: {
      type: String,
      required: true,
      trim: true,
    },
    
   
   
  },
  { timestamps: true } // Added spacing for readability
);

// Corrected model naming

export default mongoose.models?.Hotel || mongoose.model("Hotel", hotelSchema);
