import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import userAtom from "../store/userAtom";

const Protected = () => {
  const [isValid, setIsValid] = useState(null);
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://medium2backend-1.onrender.com/verify", {
          withCredentials: true,
        });

        if (res.data.success) {
          const storedUser = localStorage.getItem("user");
          if (storedUser && !user.userId) {
            setUser(JSON.parse(storedUser));
          }
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        console.log("Token verification failed", err);
        setIsValid(false);
      }
    };

    checkAuth();
  }, [setUser, user.userId]);

  if (isValid === null) {
    return <div className="text-center py-10">Checking authentication...</div>;
  }

  return isValid ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default Protected;
