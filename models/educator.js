import { Schema, model, models } from "mongoose";

const educatorSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  orgUrl: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
});

const Educator = models.Educator || model("Educator", educatorSchema);

export default Educator;
