const dbase = require("../config/db");
const db = dbase.promise();

exports.getAllProjectDetails = async (req, res) => {
    try {

        const [resultData] = await db.query(`CALL sp_get_allprojectlists()`);

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