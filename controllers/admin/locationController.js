const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllInvestors = async (req, res) => {
    try {

        const [rows] = await db.query("CALL sp_get_cities()");

        res.json(rows[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};
