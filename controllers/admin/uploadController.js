const dbase = require("../../config/db");
const db = dbase.promise();
const path = require("path");

exports.uploadDocument = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { investor_id, doc_type, doc_name, uploaded_by } = req.body;
        const file_url = `/uploadeddocs/${req.file.filename}`;

        await db.query(
            `INSERT INTO documents (investor_recid, doc_name, doc_type, file_url, uploaded_by, uploaded_at)
             VALUES (?, ?, ?, ?, ?, NOW())`,
            [investor_id, doc_name, doc_type, file_url, uploaded_by]
        );

        res.json({ success: true, message: "Document uploaded" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

exports.downloadDocument = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(`SELECT * FROM documents WHERE id = ?`, [id]);

        if (!rows.length) {
            return res.status(404).json({ message: "Document not found" });
        }

        const doc = rows[0];

        const filePath = path.join(__dirname, "../..", doc.file_url);

        res.download(filePath, `${doc.doc_name}.pdf`);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

exports.getDocument = async (req, res) => {
    try {

        const [rows] = await db.query(`CALL sp_getalldocuments()`);

        if (!rows.length) {
            return res.status(404).json({ message: "Document not found" });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};