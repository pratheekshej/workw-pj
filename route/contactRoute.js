const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
    let data = req.body;
    let { name, email, message } = data;
    if (!(name.length && email.length && message.length)) {
        return res.json({ msg: "Please fill all the fields" });
    }
    let smptpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'pratheekshej@gmail.com',
            pass: 'chuchi@123'
        }
    });
    let mailOptions = {
        from: data.email,
        to: 'pratheekshej@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <h3>Information</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };
    smptpTransporter.sendMail(mailOptions, (error) => {
        try {
            if (error) {
                return res.status(400).json({ msg: 'Please fill all the fields' });
            }
            return res.status(200).json({ msg: 'Thank you for contacting Pratheeksh.' });
        } catch (error) {
            if (error) {
                return res.status(500).json({ msg: "There is a server error" });
            }
        }
    });
});

module.exports = router;