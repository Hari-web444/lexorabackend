const dbase = require("../config/db");
const db = dbase.promise();

exports.getPortfolioDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultData] = await db.query(`CALL sp_get_portfolios(?)`,[id]);
        const [resultCard] = await db.query(`CALL sp_get_portfoliosCard(?)`,[id]);

        res.json({
            data: resultData[0],
            card: resultCard[0]
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.getPropertyData = async (req, res) => {
    try {

        const [result] = await db.query(`CALL sp_get_allproperties()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};