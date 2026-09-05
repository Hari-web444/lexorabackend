const dbase = require("../../config/db");
const db = dbase.promise();

exports.getAllProperty = async (req, res) => {
    try {
        
        const [result] = await db.query(`CALL sp_GetAllPropertiesdata()`);

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.addProperty = async (req, res) => {
    try {
        const {
            property_name,
            location,
            property_type,
            interest_rate,
            description,
            status,
            launch_date,
            phase,
            created_by
        } = req.body;

        if (!property_name || !location || !property_type || !status) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const [result] = await db.query(
            `CALL sp_AddPropertiesdata(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                property_name,
                location,
                property_type,
                interest_rate || null,
                description || null,
                status,
                launch_date || null,
                phase || null,
                created_by || null
            ]
        );

        res.json({
            message: "Property added successfully",
            data: result[0]?.[0] || null
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.updateProperty = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            property_name,
            location,
            property_type,
            interest_rate,
            description,
            status,
            launch_date,
            phase
        } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "Property id is required"
            });
        }

        if (!property_name || !location || !property_type || !status) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const [result] = await db.query(
            `CALL sp_UpdatePropertiesdata(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                id,
                property_name,
                location,
                property_type,
                interest_rate || null,
                description || null,
                status,
                launch_date || null,
                phase || null
            ]
        );

        res.json({
            message: "Property updated successfully",
            data: result[0]?.[0] || null
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};
