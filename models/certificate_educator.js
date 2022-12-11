import { Schema, model, models } from "mongoose";

const certificateEducatorSchema = new Schema({
  certificateID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Certificate",
  },
  educatorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Educator",
  },
});

const Certificate_Educator =
  models.Certificate_Educator ||
  model("Certificate_Educator", certificateEducatorSchema);

export default Certificate_Educator;
