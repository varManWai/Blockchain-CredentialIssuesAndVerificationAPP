import { Schema, model, models } from "mongoose";

const groupSchema = new Schema({
  groupName: {
    type:String,
    required: true
  },
  desc: {
    type: String,
    required: true,
  },
  educatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Educator'
}
});

const Group = models.Group || model("Group", groupSchema);

export default Group;
