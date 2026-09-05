const dbase = require("../config/db");
const db = dbase.promise();
const path = require("path");
const fs = require("fs");

exports.getDocsDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const [resultData] = await db.query(`CALL sp_get_documents(?)`,[id]);

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

exports.downloadDocument = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            `
            SELECT 
                id,
                investor_recid,
                doc_name,
                doc_type,
                file_url,
                uploaded_by,
                uploaded_at
            FROM documents
            WHERE id = ?
            LIMIT 1
            `,
            [id]
        );

        if (!rows || rows.length === 0) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        const document = rows[0];
        const fileName = path.basename(document.file_url);
        const filePath = path.join(
            __dirname,
            "../uploadeddocs",
            fileName
        );

        console.log("File path:", filePath);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                message: "File not found on server"
            });
        }

        const extension = path.extname(fileName);

        const downloadName =
            `${document.doc_name || "document"}${extension}`;

        res.download(
            filePath,
            downloadName,
            (error) => {
                if (error) {
                    console.error("Download error:", error);

                    if (!res.headersSent) {
                        return res.status(500).json({
                            message: "Unable to download document"
                        });
                    }
                }
            }
        );

    } catch (error) {
        console.error("downloadDocument error:", error);

        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};