import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Task name is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['task', 'issue', 'feature', 'bug', 'story', 'epic'],
      default: 'task',
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'Completed', 'Overdue', 'Blocked', 'On Hold'],
      default: 'To Do',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
    },
    dueDate: {
      type: Date,
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project', 
    },
    parentTaskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
    commentIds: {
      type: [mongoose.Schema.Types.ObjectId], // Array of references to comment
      ref: 'Comment',
      default: [], 
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields.
  })

export const Task = mongoose.model("Task", taskSchema);