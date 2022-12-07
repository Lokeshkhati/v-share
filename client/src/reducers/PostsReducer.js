const PostsReducer = (state, action) => {
    switch (action.type) {

        case "CREATE_POST":
            return {
                ...state,
                posts: [...state.posts, { id: Math.random() * 100, text: action.payload }]
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