import express from 'express';
const router = express.Router()

import { register, login, logout, getAllUsers, followOrUnFollow, getUserProfile, getMyProfile } from '../controllers/user.js'
import { isLoggedIn } from '../middleware/user.js'

router.route('/register').post(register)
router.route('/login').post(login)

router.route('/logout').get(logout)
router.route('/getAllUsers').get(isLoggedIn, getAllUsers)

router.route('/myProfile').get(isLoggedIn, getMyProfile);
router.route('/userProfile/:id').get(isLoggedIn, getUserProfile);
router.route('/:id').get(isLoggedIn, getUserProfile);

router.route('/follow/:id').put(isLoggedIn, followOrUnFollow)

export default router
