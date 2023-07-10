import User from '../models/user.js'
import { CustomError } from '../utils/customError.js'
import { cookieToken } from '../utils/cookieToken.js'

const register = async (req, res, next) => {
    try {
        const { fullName, username, email, password, } = req.body

        if (!email || !fullName || !username || !password) {
            return next(new CustomError('Please provide all fields', 400))
        }

        const UserExists = await User.findOne({ email })
        if (UserExists) {
            return next(new CustomError("User with given email already exists"))
        }

        const user = User.create({
            fullName,
            username,
            email,
            password,
        })
        cookieToken(user, res)

    } catch (error) {
        return next(new CustomError(error))
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return next(new CustomError('please provide email and password', 400))
        }
        const user = await User.findOne({ email, }).select("+password")
        if (!user) {
            return next(new CustomError('You are not registered', 400))
        }
        const isMatch = await user.matchPassword(password)
        if (!isMatch) {
            return next(new CustomError('Email or Password does not match or exist', 400))
        }

        cookieToken(user, res)
    } catch (error) {
        next(new CustomError(error, 500))
    }
}

const logout = async (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logout success"
    })
}


const getMyProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('posts')
        if (!user) {
            return next(new CustomError('User Not Found', 404))
        }

        cookieToken(user, res)
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}

const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate('posts')
        if (!user) {
            return next(new CustomError('User Not Found', 404))
        }

        res.status(200).json({ success: true, user })
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}

const getAllUsers = async (req, res, next) => {

    const users = await User.find()
    res.status(200).json({ success: true, users })
}

const followOrUnFollow = async (req, res, next) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const loggedInUser = await User.findById(req.user.id);

        if (!userToFollow) {
            return next(new CustomError('User Not Found', 404))
        }

        if (loggedInUser.following.includes(userToFollow._id)) {

            const followingIndex = loggedInUser.following.indexOf(userToFollow._id)
            const followersIndex = loggedInUser.following.indexOf(loggedInUser._id)

            loggedInUser.following.splice(followingIndex, 1)
            userToFollow.followers.splice(followersIndex, 1)

            await loggedInUser.save()
            await userToFollow.save()

            return res.status(200).json({ success: true, message: "User UnFollowed", });
        }

        loggedInUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedInUser._id);

        // await Notification(targetId, sourceId, "NEW_FOLLOWER", 0);

        await loggedInUser.save();
        await userToFollow.save();

        return res.status(200).json({ success: true, message: "User Followed", });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { register, login, logout, followOrUnFollow, getAllUsers, getUserProfile, getMyProfile }

