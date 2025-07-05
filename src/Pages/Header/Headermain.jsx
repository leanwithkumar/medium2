import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Headermain() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchitem, setSearchitem] = useState("")
  const navigate = useNavigate()

  const logoutuser = async()=>{
    try{
      await axios.get('http://localhost:5000/logout', {
      withCredentials: true
      });
      localStorage.removeItem("medium2token"); 
      navigate('/signin');
    }
    catch(err){
      console.log("unable to logout", err.message)
    }
  
  }

  return (
    <div className="w-full border-b border-gray-300">
      <div className="flex justify-between items-center md:px-25  px-5">
        <div className='flex justify-between'>
           <Link to='/home'>
          <div>
            <img
              src="/Medium2.png"
              width="100"
              height="40"
              className="max-w-full h-auto py-5"
              alt="Logo"
            />
          </div>
        </Link>
         <div>
          <div>
              <div className="py-3 px-10">
                <div className="border border-black rounded-3xl w-full md:w-[250px] h-10 flex items-center">
                  <input
                    type="text"
                    value={searchitem}
                    onChange={(e) => setSearchitem(e.target.value)}
                    placeholder="search "
                    className="w-full px-5 py-2 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              </div>
        </div>

        </div>
       

       

        <div className="hidden md:flex flex-wrap justify-center gap-4 p-2 text-base sm:text-lg md:text-xl">
          <Link to=''>
          <div className="flex px-2 hover:underline cursor-pointer">
            <img src='/writeee.png'
            className='h-8'/>
            <div className="px-2">Write</div>
          </div>
          </Link>
          <button onClick={logoutuser}><div className="px-2 hover:underline cursor-pointer">Log out</div></button>
          
         
        </div>

        <div className="md:hidden pr-10">
          <button
            className="text-3xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-10 pb-4 text-base sm:text-lg">
          <Link to='/ourstroy' onClick={() => setIsOpen(false)}>
            <div className="px-2 hover:underline cursor-pointer">My Profile</div>
          </Link>
         
        </div>
      )}
    </div>
  );
}

export default Headermain;
