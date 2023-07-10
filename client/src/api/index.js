import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3000" })

export const createPost = (newPost) => API.post('api/v1/posts/create', newPost)
export const grtAllPosts = () => API.post('api/v1/posts/getAllPosts')
export const like = (postId) => API.put(`api/v1/posts/like/${postId}`)

export const register = (formData) => API.post('api/v1/auth/register', formData)
export const login = (formData) => API.post('api/v1/auth/login', formData)
export const logout = () => API.get('api/v1/auth/logout')
export const getMyProfile = () => API.get('api/v1/auth/myProfile')
export const getAllUsers = () => API.get('api/v1/auth/getAllUsers')
export const followOrUnFollow = (userId) => API.put(`api/v1/auth/follow/${userId}`)
export const getUserProfile = (userId) => API.get(`api/v1/auth/userProfile/${userId}`)


