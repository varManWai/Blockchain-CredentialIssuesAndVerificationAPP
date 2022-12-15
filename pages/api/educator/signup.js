import connectMongo from '../../../utils/connectMongo';
import Educator from '../../../models/educator';

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function RegisterEducator(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');

    const educator = await Educator.create(req.body);
    // console.log('CREATED DOCUMENT');

    res.json({ educator });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
