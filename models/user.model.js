import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'User name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: [
        'Designer',
        'Developer',
        'Tester',
        'Project Manager',
        'Product Owner',
        'Scrum Master',
        'CEO',
        'COO',
        'CTO',
        'Client Representative',
      ],
      required: [true, 'Role is required'],
    },
    // tasksAssigned: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Task', // Reference to tasks assigned to the user
    //   },
    // ],
    // tasksCreated: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Task', // Tasks created by the user
    //   },
    // ],
    // comments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment', // Comments made by the user
    //   },
    // ],
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Projects the user is involved in
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  });

export const User = mongoose.model("User", userSchema);