import { useEffect, useReducer } from "react";
import { createContext, useContext } from "react";
import PostsReducer from "../reducers/PostsReducer";

const initialState = {
    posts: [],
    bookmarks: [],
    likes: [],
    followers: 12,
    following: 129,
}

const storedValues = (initialState) =>
    JSON.parse(localStorage.getItem("state")) || initialState;

const PostsContext = createContext(initialState)

const usePosts = () => useContext(PostsContext)
const PostsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PostsReducer, initialState, storedValues)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const createPost = (text) => {
        dispatch({ type: "CREATE_POST", payload: text })
    }
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

    const values = { posts: state.posts, bookmarks: state.bookmarks, likes: state.likes, following: state.following, followers: state.followers, addPostToBookmarks, createPost, removePostFromBookmarks, addLikeToPost, removeLikeFromPost, }
    return (
        <PostsContext.Provider value={values}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsProvider, usePosts }