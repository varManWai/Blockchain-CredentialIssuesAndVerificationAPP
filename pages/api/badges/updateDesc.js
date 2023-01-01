import connectMongo from "../../../utils/connectMongo";
import Badge from "../../../models/Badge";
import Badge_Student from "../../../models/Badge_student";
import { Types } from "mongoose";
import Badge_Educator from "../../../models/Badge_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../models/educator";
import { hashPassword } from "../../../utils/auth";
import Student from "../../../models/student";

export default async function resetPWD(req, res) {
  try {
    // console.log("CONNECTING TO MONGO");

    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');
    const badgeRecieved = req.body.badge;
    const descriptionRecieved = req.body.desc;

    // console.log(badgeRecieved);

    // console.log("here it the updated desc");
    // console.log(descriptionRecieved);

    const verifiedBadge = await Badge.find({
      address: badgeRecieved.address,
    });

    // console.log(verifiedBadge);

    if (verifiedBadge) {
      verifiedBadge.map(async (badgeData) => {
        await Badge.findByIdAndUpdate(badgeData._id, {
          desc: descriptionRecieved,
        });
      });

      // console.log("updated descrption");
    } else {
      res.status(422).json({
        message: "update descrption unsuccessfully!",
      });
      return;
    }

    res.status(201).json({ message: "update description successfully!" });
  } catch (error) {
    console.log(error);
    res.status(422).json({
      message: "Some error happen",
    });
    return;
  }
}
