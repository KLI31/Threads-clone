const moongose = require("mongoose");

const postSchema = moongose.Schema({
    content: { Type: String },
    user: { type: moongose.Schema.Types.ObjectId, ref: "User", require: true },
    likes: [
        {
            type: moongose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    replies: [
        {
            user: {
                type: moongose.Schema.Types.ObjectId,
                ref: "User"
            },
            content: {
                type: String,
                required: true
            },
            createAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

const Post = moongose.model("Post", postSchema)

module.exports = Post