import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const city = req.query.city?.trim();

    let hotels;

    if (city && city !== "") {
      // If city is provided, filter by city or name
      hotels = await Hotel.find({
        $or: [
          { city: { $regex: city, $options: "i" } },
          { name: { $regex: city, $options: "i" } },
        ],
      });
    } else {
      // If city is not provided, return all hotels
      hotels = await Hotel.find({});
    }

    return res.status(200).json({ hotels });
  } catch (err) {
    console.error("🔥 API /api/hotels error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
