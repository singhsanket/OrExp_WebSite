"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    } 
  }, []);

  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center">
        {user ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-blue-600">User Profile</h1>
            <div className="mb-6">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
            </div>
            <button className='border-2 rounded-2xl w-20 bg-blue-500 hover:bg-blue-700 hover:scale-110' onClick={()=>router.push("/homepage")}> Home</button>
          </>
        ) : (
          <p className="text-gray-600">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default User;