import connectDB from "@/db";
import Hotel from "@/models/hotel-model";
import mongoose from "mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // ✅ Connect to MongoDB
      await connectDB();

      const { id } = req.query;

      // 🛑 Validate ID (must exist & be a valid MongoDB ObjectId)
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid or missing hotel ID" });
      }

      // ✅ Fetch hotel by ID
      const hotel = await Hotel.findById(id);

      if (!hotel) {
        return res.status(404).json({ error: "Hotel not found" });
      }

      // ✅ Return success response
      return res.status(200).json({ msg: "Success", hotel });
    } catch (error) {
      console.error("API Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // ❌ Method not allowed (only GET supported)
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
