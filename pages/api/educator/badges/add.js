import connectMongo from "../../../../utils/connectMongo";
import Badge from "../../../../models/badge";
import Badge_Student from "../../../../models/badge_student";
import { Types } from "mongoose";
import Badge_Educator from "../../../../models/badge_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../../models/educator";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */

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

const mailOptions = {
  from: email,
  to: ["isaacworking31@gmail.com", "laizoke98@gmail.com"],
};

export default async function AddBadge(req, res) {
  try {
    // console.log('CONNECTING TO MONGO');
    await connectMongo();
    // console.log('CONNECTED TO MONGO');

    // console.log('CREATING DOCUMENT');

    const dateTime = new Date().toLocaleString();

    const { _id, title, desc, dateIssued, address, imageAddress } =
      await Badge.create({
        title:req.body.title,
        desc:req.body.desc,
        dateIssued: dateTime,
        imageAddress: req.body.imageAddress,
        address: req.body.address,
      });

    const generateEmailContent = (_id) => {
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
            <h2 style="text-align:center">Hello!</h2>
        
            <hr>
        
            <p style="text-align:justify">Congratulation on your achievement and thank you for being a part of CredBLOCK. For
                those who have yet to claim the digital credentials, fret not! We have extended the dealine for these
                redemptions.</p>
        
        
            <br>
        
            <p style="text-align:justify">To redeeem your digital credential, Please click the <a
                    href="http://localhost:3000/certificates/claim/${"1234"}">link</a>.</p>
        
        
            <img alt="image" src="http://cdn.mcauto-images-production.sendgrid.net/a600765390647751/069c42c9-e60e-4364-bc4c-434bba7a9e14/1920x1280.jpg"
                width="100%" />
        </body>
        
        </html>`,
      };
    };

    await transporter.sendMail({
      from: email,
      to: "laizoke98@gmail.com",
      ...generateEmailContent(_id),
      subject: "Claim Credential",
    });


    
    console.log("----------------------------------------");
    console.log(_id);
    console.log("----------------------------------------");

    const studentID = Types.ObjectId("639e59e4d45662e5803c762a");

    console.log("StudentID");
    console.log(studentID);
    console.log("----------------------------------------");

    const badgeStudent = await Badge_Student.create({
      badgeID: _id,
      studentID: studentID,
    });

    const educatorEmail = req.body.educatorEmail;

    console.log("Educator email");
    console.log(educatorEmail);

    const educator = await Educator.findOne({ email: educatorEmail });

    console.log(educator);

    const educatorID = Types.ObjectId(educator._id);

    console.log("Educator ID");
    console.log(educatorID);
    console.log("----------------------------------------");

    const badgeEducator = await Badge_Educator.create({
      badgeID: _id,
      educatorID: educatorID,
    });

    // console.log("CREATED DOCUMENT");

    res.status(201).json({ message: "Created badge!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
