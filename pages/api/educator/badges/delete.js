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
    const address = req.body.address;

    // console.log("address");
    // console.log(address);

    const badges = await Badge.find({ address: address });

    // console.log("badges");
    // console.log(badges);

    const badgeData = await badges.map(async (badge) => {
      await Badge_Student.deleteOne({
        badgeID: badge._id,
      });
      await Badge_Educator.deleteOne({
        badgeID: badge._id,
      });
      await Badge.deleteOne({ _id: badge._id });
    });

    // console.log('CREATED DOCUMENT');

    res.status(201).json({ message: "Deleted badges!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
