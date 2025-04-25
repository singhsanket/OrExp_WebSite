'use client'
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser, FaShoppingCart } from 'react-icons/fa';

const Header = ({ size, setShow , onLogout}) => {
    const router = useRouter();
    
  return (
    <div className="border-b border-gray-300 py-6 bg-white">
      <div className="container mx-auto px-4 sm:flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-4xl text-center sm:text-left pb-4 sm:pb-0 text-black cursor-pointer" onClick={()=>setShow(true)}>
          OrderEXP
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            type="text"
            placeholder="Search items..."
            name="search"
            className="border border-gray-300 p-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex gap-4 text-gray-500 text-2xl mt-4 sm:mt-0">
          <FaRegUser className="cursor-pointer hover:text-black transition" />
          <button onClick={onLogout} style={{ marginLeft: 10, cursor:'pointer' }}>Logout</button>
          <span className="relative " onClick={()=>setShow(false)}>
            <FaShoppingCart className="cursor-pointer hover:text-black transition" />
            <span className="absolute top-[-15px] right-[-5px] bg-red-500 text-white text-xs font-bold px-0.5 py-0.5 rounded-full border border-white">
              {size}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
