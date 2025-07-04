import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const signinuser= async(e)=>{
    e.preventDefault();
    console.log("Signin function triggered")
    if(!email || !password){
     return toast.warn('All fields are required', {
            position: 'bottom-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
    }
    toast.info('Checking details', {
          position: 'bottom-right',
          autoClose: 4000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });

    try {
  console.log("Sending signin request...");
  const response = await axios.post("http://localhost:5000/signin", {
    email,
    password
  });

  console.log("Response received:", response);

  localStorage.setItem("medium2token", response.data.token);
  toast.success(response.data.message, { /* toast config */ });

  setEmail("");
  setPassword("");
  console.log("Redirecting to /home");
  setTimeout(() => {
    navigate('/home');
  }, 2000);

} catch (err) {
  console.log("Error caught in catch block:");
  console.log(err); // 👈 show full error
  console.log("Error.response:", err.response);

  const errorMessage =
    err.response?.data?.message ||
    err.response?.data?.errors?.[0] ||
    'Signin failed';

  toast.error(errorMessage, { /* toast config */ });
}

    
  }
  

  return (
    <>
      <div className=" md:h-screen mx-20">
        <div className="md:mx-60 md:py-20">
          <div>
            <div className="text-xl md:text-5xl font-mono text-gray-800 break-words text-left md:text-left py-10">
              sign in
            </div>

            <div>
              <div className="py-5">
                <div className="border border-black rounded-3xl w-full md:w-[400px] h-12 flex items-center">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-2 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="py-5">
                <div className="border border-black rounded-3xl w-full md:w-[400px] h-12 flex items-center">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-5 py-2 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <button className="text-xl md:text-2xl font-mono text-gray-800 break-words text-left md:text-left hover:underline"
                onClick={signinuser}>
                  sign in
                </button>
              </div>

              <div>
                <div className="text-xl md:text-2xl font-mono text-gray-800 break-words text-left md:text-left hover:underline">
                  <Link to='/getstarted'>Are you new to medium2</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
                  position="bottom-right"
                  autoClose={3000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover
                  theme="light"
                  transition = {Bounce}
                />
      </div>
    </>
  );
}

export default Signin;
