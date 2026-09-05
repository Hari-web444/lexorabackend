require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const docsRoutes = require("./routes/docsRoutes");
const projectRoutes = require("./routes/projectRoutes");
const messagesRoutes = require("./routes/messagesRoutes");
const profileRoutes = require("./routes/profileRoutes");
const supportRoutes = require("./routes/supportRoutes");
const referralRoutes = require("./routes/referralRoutes");
const faqsRoutes = require("./routes/faqsRoutes");

const adUserRoutes = require("./routes/admin/adUserRoutes");
const investorRoutes = require("./routes/admin/investorRoutes");
const returnRoutes = require("./routes/admin/returnRoutes");
const locationRoutes = require("./routes/admin/locationRoutes");
const propertyRoutes = require("./routes/admin/propertyRoutes");
const messageRoutes = require("./routes/admin/messageRoutes");
const adSupportRoutes = require("./routes/admin/supportRoutes");
const uploadRoutes = require("./routes/admin/uploadRoutes");
const auditRoutes = require("./routes/admin/auditRoutes");
const dbRoutes = require("./routes/admin/dbRoutes");
const referralsRoutes = require("./routes/admin/referralsRoutes");

const app = express();

app.use(cors({
    origin: [ 'http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    next();
});

app.use("/", userRoutes);
app.use("/", dashboardRoutes);
app.use("/", portfolioRoutes);
app.use("/", transactionRoutes);
app.use("/", docsRoutes);
app.use("/", projectRoutes);
app.use("/", messagesRoutes);
app.use("/", profileRoutes);
app.use("/", supportRoutes);
app.use("/", referralRoutes);
app.use("/", faqsRoutes);

app.use("/admin/", adUserRoutes);
app.use("/admin/", investorRoutes);
app.use("/admin/", locationRoutes);
app.use("/admin/", returnRoutes);
app.use("/admin/", propertyRoutes);
app.use("/admin/", messageRoutes);
app.use("/admin/", adSupportRoutes);
app.use("/admin/", uploadRoutes);
app.use("/admin/", auditRoutes);
app.use("/admin/", dbRoutes);
app.use("/admin/", referralsRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});