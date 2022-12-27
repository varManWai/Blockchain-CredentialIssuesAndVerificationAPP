import { Schema, model, models } from "mongoose";

const badgeSchema = new Schema({
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
  imageAddress: {
    type: String,
  },
  groupID: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
});

const Badge = models.Badge || model("Badge", badgeSchema);

export default Badge;
