import mongoose from 'mongoose';
const { Schema } = mongoose;
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a full name"],
        maxlength: [30, "First Name should be under 30 char."]
    },
    username: {
        type: String,
        required: [true, "Please provide a user name"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validator: [validator.isEmail, 'Please enter email in correct format'],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password should be at least 6 char."],
        select: false
    },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    bio: {
        type: String,
    },
    websiteLink: {
        type: String
    }
    ,
    avatar: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

})

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next();

        this.password = await bcrypt.hash(this.password, 10)
    } catch (error) {

    }
})

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY
    })


}

export default mongoose.model('User', userSchema)




