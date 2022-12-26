import connectMongo from '../../../../utils/connectMongo';
import Group from '../../../../models/group';
// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function EditGroup(req, res) {
    try {
        // console.log('CONNECTING TO MONGO');
        await connectMongo();
        // console.log('CONNECTED TO MONGO');
        console.log(req.body);

        // get the educator
        console.log("CREATED DOCUMENT1");
        console.log(req.body.groupID);
        console.log(req.body.name);
        console.log(req.body.desc);
        
        const update = await Group.findByIdAndUpdate(req.body.groupID, { groupName: req.body.name, desc: req.body.desc });

        // console.log(res.status);

        // // groupName: enteredName,
        // // desc: enteredDesc,
        // // recipients: items
        // // educatorEmail: session.user.email,
        console.log('CREATED DOCUMENT');

        //res.json({ Group });
        res.status(200).json({ msg: 'Success' })
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}