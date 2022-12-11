import { Schema, model, models } from "mongoose";

const groupRecipientSchema = new Schema({
  recipientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipient",
  },
  groupID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
});

const Group_Recipient =
  models.Group_Recipient || model("Group_Recipient", groupRecipientSchema);

export default Group_Recipient;
