import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import PostsReducer from "../reducers/PostsReducer";
import * as api from "../api";

const initialState = {
    posts: [],
    currentUserPosts: [],
    bookmarks: [],
    likes: [],
    isLoading: false
}

const storedValues = (initialState) =>
    JSON.parse(localStorage.getItem("state")) || initialState;

const PostsContext = createContext(initialState)

const usePosts = () => useContext(PostsContext)
const PostsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PostsReducer, initialState, storedValues)

    const grtAllPosts = async () => {
        const { data } = await api.grtAllPosts();
        const { posts } = data;
        dispatch({ type: "GET_ALL_POSTS", payload: { posts } });
    };

    useEffect(() => {
        grtAllPosts();
    }, []);

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])
    // const deletePost = (id) => {
    //     dispatch({ type: "DELETE_POST", payload: id })
    // }
    const addPostToBookmarks = (post) => {
        dispatch({ type: "ADD_POST_TO_BOOKMARKS", payload: post })
    }
    const removePostFromBookmarks = (id) => {
        dispatch({ type: "REMOVE_POST_FROM_BOOKMARKS", payload: id })
    }

    const values = { ...state, addPostToBookmarks, removePostFromBookmarks, dispatch }
    return (
        <PostsContext.Provider value={values}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsProvider, usePosts }