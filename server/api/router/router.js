
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// send mail
// console.log(process.env.)
router.post("/sendMail", async (req, res) => {
    console.log(req.body);
    const { name, contact, email, fanType, message } = req.body;
    // console.log("inside send email route")
    try {
        const info = await mailer(
            process.env.EMAIL,
            "Contact form",
            `Message from ${name} <br> email: ${email} <br> contact : ${contact} <br> fan-type :${fanType} <br> message: ${message} `
        );
        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD,
        //     }
        // })
        // const mailOptions = {
        //     from: email,
        //     to: process.env.EMAIL,
        //     subject: `Message from fan : ${contact}`,
        //     html: `<h1>Hello</h1>`,
        // }
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log('Error occurred', error);
        //     }
        //     else {
        //         console.log(`Email sent successfully to admin with id:${name} `)
        //         res.status(201).json({ status: 201, info })
        //     }
        // })
        res.status(201).json({ status: 201, info });
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({ status: 401, error });
    }
});

const mailer = async (to, subject, hbody) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });

        let message = {
            from: '"Harshit Yadav" <hy172003@gmail.com>',
            to: to,
            subject: subject,
            html: hbody,
        };
        console.log("message : " + message.to);
        let info = await transporter.sendMail(message);
        console.log(info);
        // save_message(username, to, subject, hbody, "success", type, info.messageId);
        return info;
    } catch (err) {
        throw err;
    }

};

module.exports = router;
