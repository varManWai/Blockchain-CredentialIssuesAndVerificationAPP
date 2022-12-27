import connectMongo from "../../../utils/connectMongo";
import { hashPassword } from "../../../utils/auth";
import Educator from "../../../models/educator";

export default async function updatePWD(req, res) {
    try {
        console.log("CONNECTING TO MONGO");

        await connectMongo();
        // console.log('CONNECTED TO MONGO');

        console.log("here error");
        const selectedEducator = req.body.educator._id
        const newPassword = req.body.password;

        const encryptedPassword = await hashPassword(newPassword);


        const updateSelectedEducatorPassword = await Educator.findByIdAndUpdate(selectedEducator, {
            password: encryptedPassword,
        });

        res.status(201).json({ message: "Update password successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
