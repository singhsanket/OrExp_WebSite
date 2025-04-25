'use client'

const Card = ({ item, handleClick }) => {
  const { title, manititle, price, img } = item;
    
    
  return (
    <div
      className="w-[250px] p-5 hover:shadow-[0_10px_10px_10px_rgba(0,0,0,0.1)] border-2 rounded-2xl cursor-pointer transition-shadow "
    >
      <div className="flex justify-center mb-4">
        <img src={img} alt="clothing" className="w-[150px] h-[200px] object-cover rounded" />
      </div>
      <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-950">{title}</p>
        <p className="text-sm text-gray-600">{manititle}</p>
        <p className="text-sm font-medium text-gray-900">Price - {price} Rs</p>
        <button
          onClick={() => handleClick(item)}
          className="mt-2 px-3 py-1.5 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded transition-transform transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
