import connectMongo from "../../../utils/connectMongo";
import Certificate from "../../../models/certificate";
import Certificate_Student from "../../../models/certificate_student";
import { Types } from "mongoose";
import Certificate_Educator from "../../../models/certificate_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../models/educator";
import { hashPassword } from "../../../utils/auth";
import Student from "../../../models/student";

export default async function resetPWD(req, res) {
  try {
    console.log("CONNECTING TO MONGO");

    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const certificateRecieved = req.body.certificate;
    const dateIssuedRecieved = req.body.dateIssued;

    console.log(certificateRecieved);
    console.log(dateIssuedRecieved);

    const verifiedCertificate = await Certificate.findById(certificateRecieved._id);

    console.log(verifiedCertificate);

    if (verifiedCertificate) {
      const updatedCertificate = await Certificate.findByIdAndUpdate(
        verifiedCertificate._id,
        {
          dateIssued: dateIssuedRecieved,
        }
      );

      console.log(updatedCertificate);

      console.log("updated date issued");
    } else {
      res.status(422).json({
        message: "updated date issued unsuccessfully!",
      });
      return;
    }

    res.status(201).json({ message: "updated date issued successfully!" });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      message: "Some error happend",
    });
    return;
  }
}
