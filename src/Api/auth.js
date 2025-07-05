import axios from 'axios';

export const verifyUser = async () => {
  try {
    const res = await axios.get("http://localhost:5000/verify", {
      withCredentials: true,
    });
    console.log(res.message)
    return { success: true };
  } catch (err) {
    console.log(err.message)
    return { success: false };
    
  }
};