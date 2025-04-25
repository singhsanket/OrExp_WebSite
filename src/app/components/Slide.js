const Slide = ({ img, title, manititle, price }) => {
    return (
      <div className="relative outline-none border-none">
        <div className="absolute left-[30px] md:left-[70px] top-1/2 -translate-y-1/2 max-w-[250px] sm:max-w-[350px] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h3 className="text-pink-600 text-[24px] lg:text-[28px] capitalize">{title}</h3>
          <h2 className="text-black text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] capitalize">{manititle}</h2>
          <h3 className="text-[20px] text-gray-600">
            Starting at{" "}
            <b className="text-[20px] md:text-[24px] lg:text-[30px] text-black">{price}</b>
          </h3>
          <div className="bg-pink-600 text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black">
            Shop Now
          </div>
        </div>
  
        {/* Updated Image Component with controlled size */}
        <div className="w-full max-w-[400px] mx-auto overflow-hidden">
          <img
            className="w-[100%] h-[500px] mg:h-auto rounded-xl object-cover-right md:object-left-bottom"
            src={img}
            alt="banner"
          />
        </div>
      </div>
    );
  };
  
  export default Slide;
  