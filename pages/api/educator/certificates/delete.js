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
    const address = req.body.address;

    console.log("address");
    console.log(address);

    const certificates = await Certificate.find({ address: address });

    console.log("certificates");
    console.log(certificates);

    const certificateData = await certificates.map(async (certificate) => {
      await Certificate_Student.deleteOne({
        certificateID: certificate._id,
      });
      await Certificate_Educator.deleteOne({
        certificateID: certificate._id,
      });
      await Certificate.deleteOne({_id:certificate._id});

    });

    // console.log('CREATED DOCUMENT');

    res.status(201).json({ message: "Deleted certificates!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
