import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
      content: {
        type: String,
        required: [true, 'Comment content is required'],
        trim: true,
      },
      mentions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Users mentioned in the comment
        },
      ],
      taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
      },
      // project: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'Project', // Project the comment is related to
      // },  
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
export const Comment = mongoose.model('Comment', commentSchema);
  
  