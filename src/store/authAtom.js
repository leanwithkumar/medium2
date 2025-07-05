import { atom } from "recoil";

const authState = atom({
    key : "authatom",
    default: {
    isLoggedIn: false,
  },
})

export default authState