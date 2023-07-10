import Post from "../models/post.js"
import User from "../models/user.js"
import Comment from "../models/comment.js"
import Notification from "../models/notification.js"
import { CustomError } from "../utils/customError.js"

const getAllPosts = async (req, res, next) => {
    const posts = await Post.find()
    res.status(200).json({ success: true, posts })
}

const createPost = async (req, res, next) => {
    const { content } = req.body

    try {
        const user = await User.findById(req.user.id)
        console.log(user)
        if (!user) {
            return next(new CustomError('User Not Found', 404))
        }

        const post = await Post.create({
            content,
            author: user._id,
            authorName: user.fullName,
            authorUserName: user.username,
            authorAvatar: user.avatar
        })

        user.posts.push(post._id)
        await user.save()


        console.log(post)
        res.status(201).json({
            message: "New Post created", success: true, post
        })
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}

const updatePost = async (req, res, next) => {
    const { id: postId } = req.params
    const { content } = req.body

    const post = await Post.findById(postId)

    if (!post) {
        return next(new CustomError(`No post found  with id :  ${postId}`, 500))
    }

    post.content = content
    await post.save()
    res.status(201).json({
        message: "New Post created", success: true, post
    })
}

const deletePost = async (req, res, next) => {
    try {
        const { id: postId } = req.params
        const { id: userId } = req.user

        const post = await Post.findById(postId)

        if (!post) {
            return next(new CustomError('Post Not Found ', 404))
        }

        if (post?.author?.toString() !== userId) {
            return next(new CustomError("Unauthorized ", 401))
        }

        await post.remove()
        const user = await User.findById(userId)

        const index = user.posts.indexOf(postId)
        user.posts.splice(index, 1)
        await user.save()
        res.status(200).json({ success: true, message: "Post Deleted" })
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}


const likeAndUnlikePost = async (req, res, next) => {
    try {
        const { id: userId } = req.user
        const { id: postId } = req.params

        const post = await Post.findById(postId)
        if (!post) {
            return next(new CustomError('Post Not Found ', 404))
        }

        if (post.likes.includes(userId)) {
            const index = post.likes.indexOf(userId)
            post.likes.splice(index, 1)

            post.isLiked = !postId.isLiked
            await post.save();
            return res.status(200).json({
                success: true,
                message: "Like removed from post ",
                post
            });
        }

        else {
            post.likes.push(userId)
            post.isLiked = !postId.isLiked
            await post.save();
            // await Notification(post.author, userId, "LIKED", postId);
            return res.status(200).json({
                success: true,
                message: "Post Liked",
                post

            });
        }
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}

const toggleBookmark = async (req, res, next) => {

}


const commentOnPost = async (req, res, next) => {
    res.json(' commented on successfully')
}













const deleteComment = async (req, res, next) => {
    res.json(' comment deleted successfully')
}

const getLikes = async (req, res, next) => {
    res.json(' likes fetched successfully')
}
const getComments = async (req, res, next) => {
    res.json(' comments fetched successfully')
}


export { createPost,  getAllPosts, updatePost, deletePost, likeAndUnlikePost, commentOnPost, deleteComment, getLikes, getComments }

