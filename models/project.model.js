import mongoose from "mongoose";
import { User } from "./user.model";
import { Task } from "./task.model";

const projectSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Project name is required'],
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'Delayed', 'On Hold'],
        default: 'Not Started',
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who created the project
        required: [true, 'Created by field is required'],
      },
      teamMembers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Users associated with the project
        },
      ],
      tasks: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Task', // Tasks related to this project
        },
      ],
      // comments: [
      //   {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'Comment', // Comments related to the project
      //   },
      // ],
    },
    {
      timestamps: true, // Adds createdAt and updatedAt fields
    }
  );
  
export const Project = mongoose.model("Project", projectSchema)