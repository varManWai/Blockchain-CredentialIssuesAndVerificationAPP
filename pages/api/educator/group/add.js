import connectMongo from "../../../../utils/connectMongo";
import Group from "../../../../models/group";
import Recipient from "../../../../models/recipient";
import Group_recipient from "../../../../models/group_recipient";
import Educator from "../../../../models/educator";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
export default async function AddGroup(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // get the logged in educator
    const educator = await Educator.findOne({ email: req.body.educatorEmail });
    // console.log(educator._id);
    // console.log(req.body.groupName);
    // console.log(req.body.desc);
    // console.log(req.body.recipients[0]);

    // 1. create a new group
    const newGroup = await Group.create({
      groupName: req.body.groupName,
      desc: req.body.desc,
      educatorID: educator._id,
    });

    const recipients = req.body.recipients;

    // 2. create a group of recipients
    // email and code must be UNIQUE
    const recipientsData = await recipients.map(async (item) => {
      // console.log("checking here");
      // console.log(item.Name);

      // console.log(item.Email);

      //random number
      let random_number = Math.random().toString().substr(2, 5);

      const newRecipients = await Recipient.create({
        name: item.Name,
        email: item.Email,
        verificationCode: random_number,
        hasClaimed: false,
      });
      return newRecipients;
    });

    const fetchRecipient = await Promise.all(recipientsData).then((values) => {
      return values;
    });

    // no issue in adding until here;
    // issue with the return

    console.log("check newRecipients");
    console.log(fetchRecipient);

    // 3. create a list of group_recipient (solved many to many relationship)
    const recipientsGroup = fetchRecipient.map(async (item) => {
      // console.log("checking here");
      // console.log(item);
      // console.log("checking here");
      // console.log(item._id);

      const newRecipientsGroup = await Group_recipient.create({
        recipientID: item._id,
        groupID: newGroup._id,
      });
      return newRecipientsGroup;
    });

    res.status(200).json({ msg: "Group is created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
