const dbase = require("../../config/db");
const db = dbase.promise();

exports.getDbDetails = async (req, res) => {
    try {
        
        const [resultInv] = await db.query(`CALL sp_getdbinvestors()`);
        const [resultRet] = await db.query(`CALL sp_getdbreturns()`);
        const [resultTicket] = await db.query(`CALL sp_getdbtickets()`);

        res.json({
            investors: resultInv[0][0],
            return: resultRet[0][0],
            ticket: resultTicket[0][0],
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};