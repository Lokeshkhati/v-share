import express from 'express';
const router = express.Router()
import { createPost, getAllPosts, updatePost, likeAndUnlikePost, commentOnPost, deletePost, getLikes, getComments } from '../controllers/post.js'

import { isLoggedIn } from '../middleware/user.js'

router.route('/create').post(isLoggedIn, createPost)
router.route('/getAllPosts').post(isLoggedIn, getAllPosts)
// router.route('/getAllPosts').get(isLoggedIn, getAllPosts)
router.route('/:id').delete(isLoggedIn, deletePost)
router.route('/:id').put(isLoggedIn, updatePost)
router.route('/like/:id').put(isLoggedIn, likeAndUnlikePost);

export default router