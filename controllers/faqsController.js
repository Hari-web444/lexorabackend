const dbase = require("../config/db");
const db = dbase.promise();

exports.getFAQsData = async (req, res) => {
    try {

        const [resultData] = await db.query(`CALL sp_get_faqsdata()`);

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