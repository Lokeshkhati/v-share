import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        authorName: { type: String },
        authorUserName: { type: String },
        authorAvatar: { type: String, },
        likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
);

export default mongoose.model("Post", postSchema);

