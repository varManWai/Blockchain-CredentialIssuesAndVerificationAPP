import { Schema, model, models } from "mongoose";

const badgeSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  dateIssued: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
}
});

const Badge = models.Badge || model("Badge", badgeSchema);

export default Badge;
