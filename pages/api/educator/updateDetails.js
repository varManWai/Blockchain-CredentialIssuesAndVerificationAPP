import connectMongo from "../../../utils/connectMongo";
import Educator from "../../../models/educator";

export default async function updateDetails(req, res) {
    try {
        console.log("CONNECTING TO MONGO");

        await connectMongo();
        // console.log('CONNECTED TO MONGO');

        // console.log('CREATING DOCUMENT');
        const newName = req.body.name;
        const newPhoneNum = req.body.phoneNum;
        const newJobTitle = req.body.jobTitle;
        const newOrgName = req.body.orgName;
        const newOrgURL = req.body.orgURL;
        const id = req.body.educatorId;

        if (newName) {
            const newStudentName = await Educator.findByIdAndUpdate(id, {
                name: newName,
            });
        }

        if (newPhoneNum) {
            const newStudentPhoneNum = await Educator.findByIdAndUpdate(id, {
                phoneNum: newPhoneNum,
            });
        }

        if (newJobTitle) {
            const newStudentJobTitle = await Educator.findByIdAndUpdate(id, {
                jobTitle: newJobTitle,
            });
        }

        if (newOrgName) {
            const newStudentOrgName = await Educator.findByIdAndUpdate(id, {
                orgName: newOrgName,
            });
        }

        if (newOrgURL) {
            const newStudentOrgURL = await Educator.findByIdAndUpdate(id, {
                orgURL: newOrgURL,
            });
        }

        res.status(201).json({ message: "update name successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
