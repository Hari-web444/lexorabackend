const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllMessage = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_getallmessages()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};


exports.sendMessage = async (req, res) => {
    const { investor_id, subject, message , created_by} = req.body;

    if (!investor_id || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'investor_id, subject and message are all required.'
        });
    }

    try {
        
        const [result] = await db.query(`CALL sp_addadminmessages(?,?,?,?)`, [investor_id,subject,message,created_by]);

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully.',
            id: result.insertId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};