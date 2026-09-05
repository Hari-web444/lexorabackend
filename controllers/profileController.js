const dbase = require("../config/db");
const db = dbase.promise();

exports.getProfileData = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultData] = await db.query(`CALL sp_get_profiledata(?)`, [id]);

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