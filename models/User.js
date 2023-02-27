import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,

    // with validator

    validator: validator.isEmail,

    // validate with rezex

    // match: [
    //     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //     "Please enter a valid email address",
    // ],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    minLength: [6, "Password must be at least 6 characters long"],
    select: false,
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  subscription: {
    id: String,
    status: String,
  },

  avtar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

export const User = mongoose.model("User", schema);
