const dbase = require("../config/db");
const db = dbase.promise();

exports.getTicketCat = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultCat] = await db.query(`CALL sp_get_ticketcategory()`);
        const [resultData] = await db.query(`CALL sp_get_ticketlists(?)`,[id]);

        res.json({
            cat: resultCat[0],
            data: resultData[0],
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
}; 

exports.raiseTicket = async (req, res) => {
    try {
        const {
            investor_id,
            category_id,
            subject,
            message
        } = req.body;

        if (!investor_id || !category_id || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Investor, category, subject and message are required"
            });
        }

        const [resultData] = await db.query(
            `CALL sp_raise_ticket(?, ?, ?, ?)`,
            [
                investor_id,
                category_id,
                subject,
                message
            ]
        );

        res.status(201).json({
            success: true,
            message: "Ticket raised successfully",
            data: resultData[0]
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};