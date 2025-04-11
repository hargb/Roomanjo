import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg w-full mb-6 p-4 sm:p-5">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Banner Image */}
        <Image
          src={e?.banner}
          alt="hotel"
          width={400}
          height={240}
          className="w-full sm:w-96 h-60 object-cover rounded-lg"
        />

        {/* Gallery Images */}
        <div className="flex flex-wrap gap-2">
          {e?.gallery?.map((ele, idx) => (
            <Image
              key={idx}
              src={ele}
              alt="gallery"
              width={100}
              height={60}
              className="w-24 h-16 object-cover rounded-md"
            />
          ))}
        </div>

        {/* Hotel Info */}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="font-bold text-xl sm:text-2xl line-clamp-1">{e?.name}</h2>
            <p className="text-sm sm:text-base my-3 text-gray-700 text-justify">
              {e?.description}
            </p>
          </div>

          {/* Facilities */}
          <div className="text-base sm:text-lg my-3">
            <span className="font-semibold">Facilities:</span>
            <ul className="flex flex-wrap gap-4 mt-2">
              {e?.facilities?.map((ele, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Image
                    src={ele.img}
                    alt={ele.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{ele.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & Details */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <button className="w-full sm:w-60 h-12 rounded-lg bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 transition">
              Price: ₹{e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="text-lg font-bold text-red-600 hover:underline"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
