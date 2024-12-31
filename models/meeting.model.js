const meetingSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, 'Meeting title is required'],
      },
      description: String,
      startTime: {
        type: Date,
        required: [true, 'Start time is required'],
      },
      endTime: {
        type: Date,
        required: [true, 'End time is required'],
      },
      attendees: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Users attending the meeting
        },
      ],
      project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project', // Optional: Link to a project
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );
  
export const Meeting = mongoose.model('Meeting', meetingSchema);
  