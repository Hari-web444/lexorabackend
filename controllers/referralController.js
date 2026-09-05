const dbase = require("../config/db");
const db = dbase.promise();

exports.getReferrals = async (req, res) => {
    try {
        const investorId  = req.body.investorId; 
        
        const [resultData] = await db.query(`CALL sp_get_allreferrals(?)`, [investorId]);

        res.json({
            data: resultData[0],
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};