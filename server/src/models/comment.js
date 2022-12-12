import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
    commentBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comment: {
        type: String,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }

},
    { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);

