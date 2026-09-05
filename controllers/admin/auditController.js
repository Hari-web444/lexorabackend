const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllLogs = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_getalllogs()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};