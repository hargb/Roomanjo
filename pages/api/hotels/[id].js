import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await connectDB();  // ✅ Ensure database connection

            if (!req.query.id) {
                return res.status(400).json({ error: "Hotel ID is required" });
            }

            const hotel = await Hotel.findById(req.query.id);

            if (!hotel) {
                return res.status(404).json({ error: "Hotel not found" });
            }

            return res.status(200).json({ msg: "Success", hotel });
        } catch (error) {
            console.error("API Error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
