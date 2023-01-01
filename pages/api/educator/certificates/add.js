import connectMongo from "../../../../utils/connectMongo";
import Certificate from "../../../../models/certificate";
import Certificate_Student from "../../../../models/certificate_student";
import { Types } from "mongoose";
import Certificate_Educator from "../../../../models/certificate_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../../models/educator";

import Recipient from "../../../../models/recipient";
import Group_Recipient from "../../../../models/group_recipient";

import nodemailer from "nodemailer";

const path = require("path");

const dotenv = require("dotenv");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

console.log(email);
console.log(pass);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

// const mailOptions = {
//   from: email,
//   to: ["isaacworking31@gmail.com", "laizoke98@gmail.com"],
// };

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
    // const dateTime = new Date().toLocaleString();

    const groupID = Types.ObjectId(req.body.groupID);

    const groupRecipientData = await Group_Recipient.find({ groupID: groupID });

    // console.log("groupRecipientData");
    // console.log(groupRecipientData);

    const recipients = groupRecipientData.map(async (recipient) => {
      return await Recipient.findById(recipient.recipientID);
    });

    // console.log("recipients");
    // console.log(recipients);

    const recipientsData = await Promise.all(recipients).then((values) => {
      return values;
    });

    // console.log("--------------------------------------------------------");

    const newRecipients = await recipientsData.map(async (recipient) => {
      let random_number = Math.random().toString().substr(2, 5);

      return await Recipient.create({
        name: recipient.name,
        email: recipient.email,
        verificationCode: random_number,
        hasClaimed: false,
      });
    });

    const newRecipientsData = await Promise.all(newRecipients).then(
      (values) => {
        return values;
      }
    );

    // console.log("----------------------------------------");
    // console.log(newRecipientsData);
    // // console.log(newGroupRecipientsData);

    // console.log("----------------------------------------");

    const certificates = await newRecipientsData.map(async (recipient) => {
      return await Certificate.create({
        title: req.body.title,
        desc: req.body.desc,
        dateIssued: req.body.dateIssued,
        address: req.body.address,
        groupID: groupID,
      });
    });

    const certificatesData = await Promise.all(certificates).then((values) => {
      return values;
    });

    // console.log(certificatesData);

    const educatorEmail = req.body.educatorEmail;

    // console.log("Educator email");
    // console.log(educatorEmail);

    const educator = await Educator.findOne({ email: educatorEmail });

    const educatorID = Types.ObjectId(educator._id);

    // console.log("Educator ID");
    // console.log(educatorID);
    // console.log("----------------------------------------");

    const certificateEducator = await certificatesData.map(async (certificate) => {
      return await Certificate_Educator.create({
        certificateID: certificate._id,
        educatorID: educatorID,
      });
    });

    const certificateEducatorData = await Promise.all(certificateEducator).then(
      (values) => {
        return values;
      }
    );

    // console.log("CertificateEducatorData");
    // console.log(certificateEducatorData);

    const generateEmailContent = (
      certificateID,
      recipientID,
      recipientName
    ) => {
      return {
        html: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <h2 style="text-align:center">Hello ${recipientName}!</h2>
        
            <hr>
        
            <p style="text-align:justify">Congratulation on your achievement and thank you for being a part of CredBLOCK. For
                those who have yet to claim the digital credentials, fret not! We have extended the deadline for these
                redemptions.</p>
        
        
            <br>
        
            <p style="text-align:justify">To redeeem your digital credential, Please click the <a
                    href="http://localhost:3000/certificates/claim/${certificateID}?vc=${recipientID}">link</a>.</p>
        
        
            <img alt="image" src="https://res.cloudinary.com/dhfvht9ju/image/upload/v1671875905/ppkyn4l4o0vfjeq79opx.png"
                width="100%" />
        </body>
        
        </html>`,
      };
    };

    let num = -1;

    await certificatesData.map(async (certificate) => {
      // console.log(num);
      // console.log(email);
      num++;
      await transporter.sendMail({
        from: email,
        to: newRecipientsData[num].email,
        ...generateEmailContent(
          certificate._id,
          newRecipientsData[num]._id,
          newRecipientsData[num].name
        ),
        subject: "Claim Credential",
      });
    });

    // console.log("CREATED certificates");

    res.status(201).json({ message: "Created certificates!" });
  } catch (error) {

    // console.log("here is the error in certificate add page");
    console.log(error);
    res.json({ error });
  }
}
