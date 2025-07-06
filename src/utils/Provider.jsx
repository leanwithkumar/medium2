import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const Protected = () => {
  const [isValid, setIsValid] = useState(null); 

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await axios.get("http://localhost:5000/verify", {
          withCredentials: true, 
        });
        if (res.data.success) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        console.log("Token verification failed", err);
        setIsValid(false);
      }
    };

    checkToken();
  }, []);

  if (isValid === null) {
    return <div className="text-center py-10">Checking authentication...</div>;
  }

  return isValid ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;
