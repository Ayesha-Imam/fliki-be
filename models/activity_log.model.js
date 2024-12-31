import { Schema, model } from 'mongoose';

const activityLogSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true, // Link activity to a specific project
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true, // Who performed the activity
    },
    type: {
      type: String,
      enum: [
        'Task Created',
        'Task Updated',
        'Task Deleted',
        'Bug Raised',
        'Meeting Scheduled',
        //'File Uploaded',
        //'Comment Added',
      ],
      required: true, // Type of activity
    },
    details: {
      type: String, // Optional description or details
    },
    relatedTask: {
      type: Schema.Types.ObjectId,
      ref: 'Task', // Optional link to a task
    },
    relatedMeeting: {
      type: Schema.Types.ObjectId,
      ref: 'Meeting', // Optional link to a meeting
    },
    timestamp: {
      type: Date,
      default: Date.now, // Time of activity
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

export const ActivityLog = model('ActivityLog', activityLogSchema);