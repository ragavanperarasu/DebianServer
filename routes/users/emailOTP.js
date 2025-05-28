const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,       
      pass: process.env.EMAIL_PASSWORD,           
    },
  });

router.post('/emailotp', async (req, res, next) => {
    const { mail, otp } = req.body
    
    console.log(mail, otp)
    
    res.send("send Successfully")
    // const mailOptions = {
    //     from: process.env.EMAIL_ID,
    //     to: mail,
    //     subject: "Verify your MyGCT account – One-Time Password (OTP)",
    //     html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
    //       <h2 style="color: #004080;">MyGCT App - Email Verification</h2>
    //       <p>Hi there,</p>
    //       <p>Thank you for registering with <strong>MyGCT</strong>.</p>
    //       <p>Please use the following One-Time Password (OTP) to verify your account:</p>
    //       <h1 style="color: #008000; letter-spacing: 5px;">${otp}</h1>
    //       <p>This code will expire in <strong>5 minutes</strong>. Please do not share it with anyone.</p>
    //       <hr />
    //       <p style="font-size: 12px; color: #777;">If you did not request this, you can ignore this message.</p>
    //       <p style="font-size: 14px;">Best regards,<br><strong>MyGCT App Team</strong><br>Thank You</p>
    //     </div>
    //     `,
    //   };
      

    
    //   try {
    //     await transporter.sendMail(mailOptions);
    //     console.log("send successfull")
    //     res.send("send Successfully")
    //   } catch (error) {
    //     console.error(error);
        
    //   }

})

module.exports = router