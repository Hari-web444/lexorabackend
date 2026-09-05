const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendOtp = async (email, otp) => {

    const mailOptions = {
        from: `"Company name" <${process.env.EMAIL}>`,
        to: email,
        subject: "Password Reset OTP - Company name",
        html: `
       <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:'Playfair Display', serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
            <tr>
                <td align="center">

                    <table width="600" cellpadding="0" cellspacing="0" style="background:#f0ebe0;border-radius:8px;overflow:hidden;">

                        <tr>
                            <td style="background:#112040;padding:25px;text-align:center;color:#fff;font-size:24px;font-weight:bold;">
                                Company name Pvt. Ltd.
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:35px;">

                                <h2 style="margin-top:0;color:#0a1628;">
                                    Password Reset Request
                                </h2>

                                <p style="font-size:15px;color:#555;">
                                    We received a request to reset your Investor Portal password.
                                </p>

                                <p style="font-size:15px;color:#555;">
                                    Use the OTP below to continue:
                                </p>

                                <div style="
                                    text-align:center;
                                    margin:30px 0;
                                    font-size:36px;
                                    letter-spacing:10px;
                                    font-weight:bold;
                                    color:#0a1628;
                                ">
                                    ${otp}
                                </div>

                                <p style="font-size:15px;color:#555;">
                                    This OTP is valid for <strong>5 minutes</strong>.
                                </p>

                                <p style="font-size:15px;color:#555;">
                                    If you didn't request a password reset, you can safely ignore this email.
                                </p>

                            </td>
                        </tr>

                        <tr>
                            <td style="background:#f7f7f7;padding:20px;text-align:center;font-size:13px;color:#777;">
                                © 2025 Company name Pvt. Ltd.<br>
                                This is an automated email. Please do not reply.
                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>

        </body>
        </html>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendOtp;