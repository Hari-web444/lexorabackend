const dbase = require("../config/db");
const db = dbase.promise();

exports.getTransactDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultData] = await db.query(`CALL sp_get_transaction(?)`,[id]);

        res.json({
            init: resultData[0][0],
            data: resultData[1]
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};
