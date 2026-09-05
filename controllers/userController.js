const db = require("../config/db");
const jwt = require("jsonwebtoken");
const sendOtp = require("../utils/sendOtp");

const otpStore = {};

exports.Login = (req, res) => {
    const { investorId, password } = req.body;

    if (!investorId || !password) {
        return res.status(400).json({
            success: false,
            message: "Investor ID and Password are required."
        });
    }

    const query = "CALL sp_investor_login(?,?)";

    db.query(query, [investorId, password], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database error."
            });
        }

        if (!results[0].length) {
            return res.status(401).json({
                success: false,
                message: "Invalid Investor ID or Password."
            });
        }

        const user = results[0][0];

        const token = jwt.sign(
            {
                id: user.id,
                investorId: user.investor_id,
                full_name: user.full_name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user.id,
                investorId: user.investor_id,
                name: user.name
            }
        });
    });
};

exports.forgotPassword = (req, res) => {
    const { email } = req.body;    

    const query = "CALL sp_check_email(?)";

    db.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error."
            });
        }

        if (!results[0].length) {
            return res.status(404).json({
                success: false,
                message: "Email not found."
            });
        }

        const otp = Math.floor(1000 + Math.random() * 9000);

        otpStore[email] = {
            otp,
            expires: Date.now() + 300000
        };

        await sendOtp(email, otp);

        res.json({
            success: true,
            message: "OTP sent successfully."
        });
    });
};

exports.verifyOtp = (req, res) => {

    const { email, otp } = req.body;

    const data = otpStore[email];

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "OTP not found."
        });
    }

    if (data.expires < Date.now()) {
        return res.status(400).json({
            success: false,
            message: "OTP expired."
        });
    }

    if (data.otp != otp) {
        return res.status(400).json({
            success: false,
            message: "Invalid OTP."
        });
    }

    res.json({
        success: true,
        message: "OTP verified."
    });

};

exports.resendOtp = async (req, res) => {

    const { email } = req.body;

    const otp = Math.floor(1000 + Math.random() * 9000);

    otpStore[email] = {
        otp,
        expires: Date.now() + 300000
    };

    try {
        await sendOtp(email, otp);
    
        res.json({
            success: true,
            message: "OTP sent successfully."
        });
    } catch (err) {
        console.error(err);
    
        res.status(500).json({
            success: false,
            message: "Unable to send OTP."
        });
    }

};

exports.resetPassword = (req, res) => {

    const { email, password } = req.body;

    const query = "CALL sp_reset_password(?, ?)";

    db.query(query, [email, password], (err) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error."
            });
        }

        delete otpStore[email];

        res.json({
            success: true,
            message: "Password reset successfully."
        });

    });

};

