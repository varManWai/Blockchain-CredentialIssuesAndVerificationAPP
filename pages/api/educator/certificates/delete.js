import connectMongo from '../../../../utils/connectMongo';
import Certificate from '../../../../models/certificate';

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function deleteStudent(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const certificate = await Certificate.deleteOne(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ certificate });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
