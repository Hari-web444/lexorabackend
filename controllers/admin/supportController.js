const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAlltickets = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_getalltickets()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};


exports.updategetAlltickets = async (req, res) => {
    try {
        const { id } = req.params;
        const { reply, status, reply_by } = req.body;

        const [result] = await db.query(
            `CALL sp_updatealltickets(?, ?, ?, ?)`,
            [id, reply, status, reply_by]
        );

        res.json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};


