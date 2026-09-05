const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllInvestorList = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_GetAllInvestorLists()`);
        const [resultProp] = await db.query(`CALL sp_GetAllProperties()`);

        res.json({
            investors: result[0],
            property: resultProp[0]
        }); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.getAllReturns = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_GetAllReturns()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.addReturns = async (req, res) => {
    try {

        const {
            investor_id,
            property_id,
            return_month,
            amount,
            payment_date,
            payment_mode,
            reference_no,
            status,
            created_by
        } = req.body;

        const [result] = await db.query(
            `CALL sp_AddReturns(?,?,?,?,?,?,?,?,?)`,
            [
                investor_id,
                property_id,
                return_month,
                amount,
                payment_date,
                payment_mode,
                reference_no,
                status,
                created_by
            ]
        );

        res.status(201).json({
            success: true,
            message: "Return entry added successfully."
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.updateReturn = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            investor_id,
            property_id,
            return_month,
            amount,
            payment_date,
            payment_mode,
            reference_no,
            status,
            created_by
        } = req.body;

        const [result] = await db.query(
            `CALL sp_UpdateReturn(?,?,?,?,?,?,?,?,?,?)`,
            [
                id,
                investor_id,
                property_id,
                return_month,
                amount,
                payment_date,
                payment_mode,
                reference_no,
                status,
                created_by
            ]
        );

        res.status(200).json({
            success: true,
            message: "Return updated successfully."
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

exports.bulkMarkPaid = async (req, res) => {
    try {

        const [result] = await db.query(
            `CALL sp_BulkMarkReturnsPaid()`
        );

        res.status(200).json({
            success: true,
            message: result[0][0].message,
            updated: result[0][0].updated_count
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};