import mongoose from "mongoose";
const { Schema } = mongoose;

const notificationSchema = new Schema(
    {
        type: {
            type: String,
            enum: ["NEW_FOLLOWER", "LIKED", "NEW_COMMENT"],
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
        targetId: { type: Schema.Types.ObjectId, ref: "User" },
        sourceId: { type: Schema.Types.ObjectId, ref: "User" },
        isRead: { type: Boolean, default: false },
    },
    { timestamps: true }
);


export default mongoose.model("Notification", notificationSchema);

