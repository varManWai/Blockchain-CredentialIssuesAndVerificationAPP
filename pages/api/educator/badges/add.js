import connectMongo from '../../../../utils/connectMongo';
import Badge from '../../../../models/badge';

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
    const badge = await Badge.create(req.body);
    // console.log('CREATED DOCUMENT');

    res.json({ badge });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
