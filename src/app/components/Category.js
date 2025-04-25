import Link from "next/link";

const Category = () => {
  return (
    <div className="lg:block bg-white">
      <div className="container mx-auto px-4">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          {["Home", "Men", "Caps", "Hot Offers", "Trending"].map((item, index) => (
            <Link
              key={index}
              href="/homepage"
              className="relative text-black hover:text-pink-500 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              <span>{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
