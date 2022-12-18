import connectMongo from '../../../../utils/connectMongo';
import Group from '../../../../models/group';

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function AddGroup(req, res) {
    try {
        // console.log('CONNECTING TO MONGO');
        await connectMongo();
        // console.log('CONNECTED TO MONGO');

        // console.log('CREATING DOCUMENT');
        const badge = await Group.create(req.body);
        // console.log('CREATED DOCUMENT');

        res.json({ Group });
        res.status(200).json({ msg: 'Success' });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}