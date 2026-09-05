const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendInvestorMail = async (
    email,
    fullName,
    investorId,
    password
) => {

    const mailOptions = {
        from: `"Company Name" <${process.env.EMAIL}>`,
        to: email,
        subject: "Investor Portal Login Credentials",
        html: `
            <h2>Welcome ${fullName}</h2>

            <p>Your investor account has been created successfully.</p>

            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <td><strong>Investor ID</strong></td>
                    <td>${investorId}</td>
                </tr>

                <tr>
                    <td><strong>Temporary Password</strong></td>
                    <td>${password}</td>
                </tr>
            </table>

            <br>

            <p>Please login and change your password after your first login.</p>

            <br>

            <b>Regards</b><br>
            LXH Team
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendInvestorMail;