import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Reminder title is required'],
    },
    description: String,
    dueDate: {
      type: Date,
      required: [true, 'Reminder due date is required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task', // Optional: Link to a specific task
    },
    // project: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Project', // Optional: Link to a project
    // },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Reminder = mongoose.model('Reminder', reminderSchema);
