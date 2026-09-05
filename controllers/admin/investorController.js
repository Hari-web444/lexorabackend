const dbase = require("../../config/db");
const sendInvestorMail = require("../../utils/sendMail");
const db = dbase.promise();

exports.getAllInvestors = async (req, res) => {
    try {
        const {
            search = "",
            status = ""
        } = req.query;
        
        const [result] = await db.query(
            `CALL sp_GetAllInvestors(?,?)`,
            [
                search,
                status
            ]
        );

        res.json(result[0]); 

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

exports.createInvestor = async (req, res) => {
    try {

        const {
            full_name,
            father_spouse_name,
            date_of_birth,
            gender,
            nationality,
            residential_status,
            occupation,
            income_range,
            mobile,
            email,
            perm_address,
            curr_address,
            city,
            state,
            pin,
            pan,
            aadhaar_last4,
            bank_account,
            ifsc,
            investment_purpose,
            investment_horizon,
            fund_source,
            total_invesment,
            payment_mode,
            nom_name,
            nom_relationship,
            nom_dob,
            nom_phone,
            nom_address,
            status,
            refered_by,
            ref_status,
            ref_reward,
            created_by,
            investor_id,
            invesment_date
        } = req.body;

        const [result] = await db.query(
            `CALL sp_create_investor(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                full_name,
                father_spouse_name,
                date_of_birth,
                gender,
                nationality,
                residential_status,
                occupation,
                income_range,
                mobile,
                email,
                perm_address,
                curr_address,
                city,
                state,
                pin,
                pan,
                aadhaar_last4,
                bank_account,
                ifsc,
                investment_purpose,
                investment_horizon,
                fund_source,
                total_invesment,
                payment_mode,
                nom_name,
                nom_relationship,
                nom_dob,
                nom_phone,
                nom_address,
                status,
                refered_by,
                ref_status,
                ref_reward,
                created_by,
                investor_id,
                invesment_date
            ]
        );

        const investor = result[0][0];

        await sendInvestorMail(
            email,
            full_name,
            investor.investor_id,
            investor.v_password
        );
        
        res.status(201).json({
            success: true,
            message: "Investor created successfully.",
            investor_id: investor.investor_id
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: err.message
        });
    }
};

// Update Investor
exports.updateInvestor = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            full_name,
            father_spouse_name,
            date_of_birth,
            gender,
            nationality,
            residential_status,
            occupation,
            income_range,
            mobile,
            email,
            perm_address,
            curr_address,
            city,
            state,
            pin,
            pan,
            aadhaar_last4,
            bank_account,
            ifsc,
            investment_purpose,
            investment_horizon,
            fund_source,
            total_invesment,
            payment_mode,
            nom_name,
            nom_relationship,
            nom_dob,
            nom_phone,
            nom_address,
            status,
            refered_by,
            ref_status,
            ref_reward,
            invesment_date
        } = req.body;

        await db.query(
            `CALL sp_update_investor(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                id,
                full_name,
                father_spouse_name,
                date_of_birth,
                gender,
                nationality,
                residential_status,
                occupation,
                income_range,
                mobile,
                email,
                perm_address,
                curr_address,
                city,
                state,
                pin,
                pan,
                aadhaar_last4,
                bank_account,
                ifsc,
                investment_purpose,
                investment_horizon,
                fund_source,
                total_invesment,
                payment_mode,
                nom_name,
                nom_relationship,
                nom_dob,
                nom_phone,
                nom_address,
                status,
                refered_by,
                ref_status,
                ref_reward,
                invesment_date
            ]
        );

        res.json({
            success: true,
            message: "Investor updated successfully."
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

// Soft Delete
exports.deleteInvestor = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            "UPDATE investors SET isdeleted=1 WHERE id=?",

            [id]

        );

        res.json({
            message: "Investor deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.bulkAddInvestors = async (req, res) => {
    try {
        const { investors } = req.body;

        if (!Array.isArray(investors) || investors.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No investor data found",
            });
        }

        const successRows = [];
        const failedRows = [];

        for (let i = 0; i < investors.length; i++) {
            const investor = investors[i];
            const excelRow = i + 2;

            try {

                if (!String(investor.full_name || "").trim()) {
                    throw new Error("Full Name is required");
                }

                if (!String(investor.mobile || "").trim()) {
                    throw new Error("Mobile is required");
                }

                if (!String(investor.email || "").trim()) {
                    throw new Error("Email is required");
                }

                if (!String(investor.pan || "").trim()) {
                    throw new Error("PAN is required");
                }


                const [result] = await db.query(
                    `CALL sp_create_investor(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                    [
                        investor.full_name,
                        investor.father_spouse_name || null,
                        investor.date_of_birth || null,
                        investor.gender || null,
                        investor.nationality || null,
                        investor.residential_status || null,
                        investor.occupation || null,
                        investor.income_range || null,
                        investor.mobile,
                        investor.email,
                
                        investor.perm_address || null,
                        investor.curr_address || null,
                        investor.city || null,
                        investor.state || null,
                        investor.pin || null,
                        investor.pan || null,
                        investor.aadhaar_last4 || null,
                        investor.bank_account || null,
                        investor.ifsc || null,
                        investor.investment_purpose || null,
                
                        investor.investment_horizon || null,
                        investor.fund_source || null,
                        investor.total_invesment || 0,
                        investor.payment_mode || null,
                        investor.nom_name || null,
                        investor.nom_relationship || null,
                        investor.nom_dob || null,
                        investor.nom_phone || null,
                        investor.nom_address || null,
                        investor.status || "Active",
                        investor.refered_by || null,
                        investor.ref_status || null,
                        investor.ref_reward || 0,
                        investor.created_by || null,
                        investor.investor_id || null,
                        investor.invesment_date || null
                    ]
                );

                const createdInvestor = result?.[0]?.[0];

                successRows.push({
                    row: excelRow,
                    investor_id:
                        createdInvestor?.investor_id || null,
                    name: investor.full_name,
                    mobile: investor.mobile,
                    email: investor.email,
                });

            } catch (error) {

                console.error(
                    `Bulk upload row ${excelRow} failed:`,
                    error
                );

                failedRows.push({
                    row: excelRow,
                    name: investor.full_name || "",
                    mobile: investor.mobile || "",
                    email: investor.email || "",
                    error: error.sqlMessage || error.message,
                });
            }
        }


        // -------------------------
        // Response
        // -------------------------

        return res.status(200).json({
            success: true,
            message: "Bulk investor upload completed",
            total: investors.length,
            imported: successRows.length,
            failed: failedRows.length,
            successRows,
            failedRows,
        });

    } catch (err) {

        console.error(
            "Bulk investor upload error:",
            err
        );

        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};