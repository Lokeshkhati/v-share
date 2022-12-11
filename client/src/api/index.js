import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3000" })

export const createPost = (newPost) => API.post('api/v1/posts/create', newPost)
export const grtAllPosts = () => API.post('api/v1/posts/getAllPosts')

export const register = (formData) => API.post('api/v1/auth/register', formData)
export const login = (formData) => API.post('api/v1/auth/login', formData)
export const getMyProfile = () => API.get('api/v1/auth/myProfile')