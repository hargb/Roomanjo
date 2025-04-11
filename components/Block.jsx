import Image from "next/image";

const Block = ({ title, para, imageSrc, imageWidth = 64, imageHeight = 64 }) => {
  return (
    <div className="flex items-center px-4 py-3 w-full sm:w-60 border-r border-gray-300">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt="demo"
          width={imageWidth}
          height={imageHeight}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
