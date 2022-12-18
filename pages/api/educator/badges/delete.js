import connectMongo from "../../../../utils/connectMongo";
import Badge from "../../../../models/badge";
import Badge_Educator from "../../../../models/badge_educator";
import Badge_Student from "../../../../models/badge_student";
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

    

    const badgeID = Types.ObjectId(req.body._id);
    
    const badgeStudent = await Badge_Student.deleteOne({ badgeID: badgeID });
    const badgeEducator = await Badge_Educator.deleteOne({ badgeID: badgeID });
    const badge = await Badge.deleteOne(req.body);
    // console.log('CREATED DOCUMENT');

    res.json({ badge });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
