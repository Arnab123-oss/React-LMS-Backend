import express from "express";
import {
  login,
  register,
  logout,
  getMyProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//To Register a New User
router.route("/register").post(register);

//Login

router.route("/login").post(login);
//Logout

router.route("/logout").get(logout);

//Get my profile

router.route("/me").get(isAuthenticated, getMyProfile);

// ChangePassword
// UpdateProfile
// UpdateProfilePicture

// ForgetPassword
// ResetPassword

//AddToPlayList
//RemovePlayList

export default router;
