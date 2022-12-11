import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import PostsReducer from "../reducers/PostsReducer";
import * as api from "../api";

const initialState = {
    posts: [],
    userCreatedPosts: [],
    bookmarks: [],
    likes: [],
    followers: [],
    following: [],
    isLoading: false
}


const PostsContext = createContext(initialState)

const usePosts = () => useContext(PostsContext)
const PostsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PostsReducer, initialState)

    const grtAllPosts = async () => {
        const { data } = await api.grtAllPosts();
        console.log(data);
        const { posts } = data;
        dispatch({ type: "GET_ALL_POSTS", payload: { posts } });
    };

    useEffect(() => {
        grtAllPosts();
    }, []);


    const deletePost = (id) => {
        dispatch({ type: "DELETE_POST", payload: id })
    }
    const addPostToBookmarks = (post) => {
        dispatch({ type: "ADD_POST_TO_BOOKMARKS", payload: post })
    }
    const removePostFromBookmarks = (id) => {
        dispatch({ type: "REMOVE_POST_FROM_BOOKMARKS", payload: id })
    }
    const addLikeToPost = () => {
        dispatch({ type: "ADD_LIKE_TO_POST", payload: 1 })
    };
    const removeLikeFromPost = () => {
        dispatch({ type: "REMOVE_LIKE_FROM_POST", payload: 1 })
    };

    const values = { ...state, addPostToBookmarks, removePostFromBookmarks, addLikeToPost, removeLikeFromPost, dispatch }
    return (
        <PostsContext.Provider value={values}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsProvider, usePosts }