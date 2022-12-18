import connectMongo from "../../../../utils/connectMongo";
import Certificate from "../../../../models/certificate";
import Certificate_Student from "../../../../models/certificate_student";
import { Types } from "mongoose";
import Certificate_Educator from "../../../../models/certificate_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../../models/educator";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function AddCertificate(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const { _id, title, desc, dateIssued, address } = await Certificate.create(
      req.body
    );

    console.log("----------------------------------------");
    console.log(_id);
    console.log("----------------------------------------");

    const studentID = Types.ObjectId("639e59e4d45662e5803c762a");

    console.log("StudentID");
    console.log(studentID);
    console.log("----------------------------------------");

    const certificateStudent = await Certificate_Student.create({
      certificateID: _id,
      studentID: studentID,
    });

    const educatorEmail = req.body.educatorEmail;

    console.log("Educator email");
    console.log(educatorEmail);

    const educator = await Educator.findOne({ email: educatorEmail });

    const educatorID = Types.ObjectId(educator._id);

    console.log("Educator ID");
    console.log(educatorID);
    console.log("----------------------------------------");


    const certificateEducator = await Certificate_Educator.create({
      certificateID: _id,
      educatorID: educatorID,
    });

    console.log("CREATED DOCUMENT");

    // res.json({ certificate });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
