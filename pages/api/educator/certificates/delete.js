import connectMongo from "../../../../utils/connectMongo";
import Certificate from "../../../../models/certificate";
import Certificate_Student from "../../../../models/certificate_student";
import Certificate_Educator from "../../../../models/certificate_educator";
import { Types } from "mongoose";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function deleteStudent(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const certificateID = Types.ObjectId(req.body._id);

    const certificateStudent = await Certificate_Student.deleteOne({
      certificateID: certificateID,
    });
    const certificateEducator = await Certificate_Educator.deleteOne({
      certificateID: certificateID,
    });
    const certificate = await Certificate.deleteOne(req.body);
    // console.log('CREATED DOCUMENT');

    res.json({ certificate });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
