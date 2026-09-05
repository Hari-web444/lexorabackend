const dbase = require("../config/db");
const db = dbase.promise();

exports.getAllDbDatas = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultCard] = await db.query(`CALL sp_get_dashboarddatas(?)`,[id]);
        const [resultGraph] = await db.query(`CALL sp_get_dashboardgraph(?)`,[id]);
        const [resultData] = await db.query(`CALL sp_get_dashboardportfolio(?)`,[id]);

        res.json({
            card: resultCard[0],
            graph: resultGraph[0],
            data: resultData[0]
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};