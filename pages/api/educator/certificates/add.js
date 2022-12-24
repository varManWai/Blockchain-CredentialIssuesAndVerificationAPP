import connectMongo from "../../../../utils/connectMongo";
import Certificate from "../../../../models/certificate";
import Certificate_Student from "../../../../models/certificate_student";
import { Types } from "mongoose";
import Certificate_Educator from "../../../../models/certificate_educator";
import { getSession, useSession } from "next-auth/react";
import Educator from "../../../../models/educator";

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
    const dateTime = new Date().toLocaleString();

    const { _id, title, desc, dateIssued, address } = await Certificate.create({
      title: req.body.title,
      desc: req.body.desc,
      dateIssued: dateTime,
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
        
        
            <img alt="image" src="https://res.cloudinary.com/dhfvht9ju/image/upload/v1671875905/ppkyn4l4o0vfjeq79opx.png"
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

    const certificateStudent = await Certificate_Student.create({
      certificateID: _id,
      studentID: studentID,
    });

    const educatorEmail = req.body.educatorEmail;

    console.log("Educator email");
    console.log(educatorEmail);

    const educator = await Educator.findOne({ email: educatorEmail });

    const educatorID = Types.ObjectId(educator._id);

    console.log("Educator ID");
    console.log(educatorID);
    console.log("----------------------------------------");

    const certificateEducator = await Certificate_Educator.create({
      certificateID: _id,
      educatorID: educatorID,
    });

    // console.log("CREATED DOCUMENT");

    res.status(201).json({ message: "Created Certificate!" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
