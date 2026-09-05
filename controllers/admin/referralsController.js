const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllReferrals = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_GetAllReferrals()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};