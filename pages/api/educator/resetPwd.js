import connectMongo from "../../../utils/connectMongo";
import Certificate from "../../../models/certificate";
import Certificate_Student from "../../../models/certificate_student";
import { Types } from "mongoose";
import Certificate_Educator from "../../../models/certificate_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../models/educator";
import { hashPassword } from "../../../utils/auth";

export default async function resetPWD(req, res) {
  try {
    // console.log("CONNECTING TO MONGO");

    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const EducatorRecieved = req.body.educator;
    const passwordRecieved = req.body.password;

    // console.log(EducatorRecieved);
    // console.log(passwordRecieved);

    const encryptedPassword = await hashPassword(passwordRecieved);
    const verifiedEducator = await Educator.findById(EducatorRecieved._id);

    // console.log(verifiedEducator);
    // console.log(encryptedPassword);

    if (verifiedEducator) {
      const newEducator = await Educator.findByIdAndUpdate(verifiedEducator._id, {
        password: encryptedPassword,
      });

      // console.log(newEducator);

      // console.log("updated password");
    } else {
      res.status(201).json({ message: "reset password unsuccessfully!" });
    }

    res.status(201).json({ message: "reset password successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
