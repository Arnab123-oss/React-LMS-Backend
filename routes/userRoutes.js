import express from "express";
import {
  login,
  register,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
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

router.route("/changepassword").put(isAuthenticated, changePassword);

// UpdateProfile

router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UpdateProfilePicture

router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

// ForgetPassword

router.route("/forgetpassword").post(forgetPassword);

// ResetPassword

router.route("/resetpassword/:token").put(resetPassword);

//AddToPlayList
//RemovePlayList

export default router;
