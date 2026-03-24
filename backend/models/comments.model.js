import mongoose from "mongoose";
const {Schema} = mongoose;

const CommentsSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    body : {
        type : String,
        required : true
    }
});

const Comments = mongoose.model("Comments", CommentsSchema);
export default Comments;