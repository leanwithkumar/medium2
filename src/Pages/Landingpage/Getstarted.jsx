import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Getstarted() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')

  return (
    <>
      <div className="mx-20">
        <div className="md:mx-60 md:py-20">
          <div>
            <div className="text-xl md:text-5xl font-mono text-gray-800 break-words text-left md:text-left py-10">
              create new account
            </div>

            <div>
              <div className="py-5">
                <div className="border border-black rounded-3xl w-full md:w-[400px] h-12 flex items-center">
                  <input
                    type="email"
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
              <div className="py-5">
                <div className="border border-black rounded-3xl w-full md:w-[400px] h-12 flex items-center">
                  <input
                    type="string"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-2 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              </div>


              <div>
                <button className="text-xl md:text-2xl font-mono text-gray-800 break-words text-left md:text-left hover:underline">
                  sign up
                </button>
              </div>

              <div>
                <div className="text-xl md:text-2xl font-mono text-gray-800 break-words text-left md:text-left hover:underline">
                  <Link to='/signin'>Already have an account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Getstarted;
