import Post from "../models/post.js"
import User from "../models/user.js"
import comment from "../models/comment.js"


const createPost = async (req, res, next) => {
    res.send('post created successfully')
}
const getPost = async (req, res, next) => {
    res.send('got post successfully')
}
const updatePost = async (req, res, next) => {
    res.send(' post updated successfully')
}
const likePost = async (req, res, next) => {
    res.send(' post liked successfully')
}
const unLikePost = async (req, res, next) => {
    res.send(' post unlike successful')
}
const commentOnPost = async (req, res, next) => {
    res.send(' commented on successfully')
}
const deleteComment = async (req, res, next) => {
    res.send(' comment deleted successfully')
}
const deletePost = async (req, res, next) => {
    res.send(' post deleted successfully')
}
const getLikes = async (req, res, next) => {
    res.send(' likes fetched successfully')
}
const getComments = async (req, res, next) => {
    res.send(' comments fetched successfully')
}


export { createPost, getPost, updatePost, deletePost, likePost, unLikePost, commentOnPost, deleteComment, getLikes, getComments }

