const PostsReducer = (state, action) => {
    switch (action.type) {

        case "CREATE_POST_BEGIN":
            return {
                ...state,
                isLoading: true

            }
        case "CREATE_POST_SUCCESS":
            return {
                ...state,
                isLoading: false
            }
        case "SET_USER_POSTS":
            return {
                ...state,
                isLoading: false,
                userCreatedPosts: action.payload
            }
        case "GET_ALL_POSTS":
            return {
                ...state,
                isLoading: false,
                posts: action.payload.posts,
            }

        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }
        case "ADD_POST_TO_BOOKMARKS":
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            }
        case "REMOVE_POST_FROM_BOOKMARKS":
            return {
                ...state,
                bookmarks: state.bookmarks.filter((post) => post.id !== action.payload)
            }
        // case "ADD_LIKE_TO_POST":
        //     return {
        //         ...state,
        //         likes: state.likes + action.payload
        //     }
        // case "REMOVE_LIKE_FROM_POST":
        //     return {
        //         ...state,
        //         likes: state.likes - action.payload
        //     }


        default:
            return state
    }
}




export default PostsReducer