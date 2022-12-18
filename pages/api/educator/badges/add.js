import connectMongo from "../../../../utils/connectMongo";
import Badge from "../../../../models/badge";
import Badge_Student from "../../../../models/badge_student";
import { Types } from "mongoose";
import Badge_Educator from "../../../../models/badge_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../../models/educator";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function AddBadge(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const { _id, title, desc, dateIssued, address } = await Badge.create(
      req.body
    );

    console.log("----------------------------------------");
    console.log(_id);
    console.log("----------------------------------------");

    const studentID = Types.ObjectId("639e59e4d45662e5803c762a");

    console.log("StudentID");
    console.log(studentID);
    console.log("----------------------------------------");

    const badgeStudent = await Badge_Student.create({
      badgeID: _id,
      studentID: studentID,
    });

    const educatorEmail = req.body.educatorEmail;

    console.log("Educator email");
    console.log(educatorEmail);

    const educator = await Educator.findOne({ email: educatorEmail });

    console.log(educator);

    const educatorID = Types.ObjectId(educator._id);

    console.log("Educator ID");
    console.log(educatorID);
    console.log("----------------------------------------");


    const badgeEducator = await Badge_Educator.create({
      badgeID: _id,
      educatorID: educatorID,
    });

    // console.log("CREATED DOCUMENT");

    res.status(201).json({ message: "Created badge!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
