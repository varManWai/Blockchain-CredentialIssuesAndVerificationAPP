import { Schema, model, models } from "mongoose";

const certificateSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
}
});

const Certificate =
  models.Certificate || model("Certificate", certificateSchema);

export default Certificate;
