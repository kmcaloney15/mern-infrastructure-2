const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Add the bcrypt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;  // 6 is a reasonable value (10 is more common)

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);


userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // bcrypt has a method within it called hash (will hash the password. )
    return next(); //have to return next() so that it moves on to the next piece of middleware
  });

module.exports = mongoose.model("User", userSchema);
