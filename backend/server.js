const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");
const axios = require("axios");

const app = express();
const PORT = 5000;

// ✅ CORS setup
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(requestIp.mw());

// ✅ Health check
app.get("/home", (req, res) => {
  res.status(200).json("Backend working");
});

// ✅ Gmail transporter (App Password required)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "admin@aurealconsulting.com",
    pass: "ihdt hwnd ipyx iacl", // ⚠️ replace with Gmail App Password
  },
});

// ✅ Auto-reply to user
const sendAutoReply = async (userEmail, userName) => {
  const mailOptions = {
    from: `"Luxury Villas Tellapur" <admin@aurealconsulting.com>`,
    to: userEmail,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:8px; overflow:hidden;">
        <div style="background-color:#047bc5; color:white; padding:15px 20px; text-align:center;">
          <h1 style="margin:0; font-size:22px;">Thank You for Contacting Us!</h1>
        </div>
        <div style="padding:20px;">
          <h2 style="color:#047bc5;">Hello ${userName},</h2>
          <p>Thank you for reaching out to <strong>Luxury Villas Tellapur</strong>!</p>
          <p>We’ll get in touch with you shortly to assist you further.</p>
          <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;" />
          <p>If you have any questions, call us at <a href="tel:+917899051883" style="color:#047bc5;">+91-78990 51883</a>.</p>
        </div>
        <div style="background-color:#f0f0f0; padding:15px 20px; text-align:center; color:#666;">
          <p style="margin:0; font-style:italic;">Warm regards,<br/>Team Aureal</p>
        </div>
      </div>
    `,
  };
  return transporter.sendMail(mailOptions);
};

// ✅ Notify admin
const notifyAdmin = async (formData) => {
  const mailOptions = {
    from: `"Luxury Villas Tellapur" <admin@aurealconsulting.com>`,
    to: "sainath@aurealconsulting.com",
    subject: "New Lead - Luxury Villas Tellapur",
    html: `
      <div style="
        font-family: 'Segoe UI', Arial, sans-serif;
        max-width: 620px;
        margin: 30px auto;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      ">
        <!-- Header -->
        <div style="
          background: linear-gradient(90deg, #00b4e6, #005f8f);
          color: #fff;
          text-align: center;
          padding: 20px 10px;
        ">
          <h2 style="margin:0; font-size:22px; letter-spacing:0.5px;">New Lead – Luxury Villas Tellapur</h2>
          <p style="margin:4px 0 0; font-size:14px; color:#d1ecff;">Exclusive NRI & Premium Buyer Inquiry</p>
        </div>

        <!-- Lead Info Table -->
        <table style="
          width:100%;
          border-collapse: collapse;
          font-size:15px;
          color:#333;
        ">
          <tbody>
            <tr style="background:#f9fafb;">
              <td style="padding:12px 18px; font-weight:600; width:40%; border-bottom:1px solid #eee;">Name</td>
              <td style="padding:12px 18px; border-bottom:1px solid #eee;">${formData.name || "-"}</td>
            </tr>
            <tr>
              <td style="padding:12px 18px; font-weight:600; background:#f9fafb; border-bottom:1px solid #eee;">Email</td>
              <td style="padding:12px 18px; border-bottom:1px solid #eee;">${formData.email || "-"}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:12px 18px; font-weight:600; border-bottom:1px solid #eee;">Mobile</td>
              <td style="padding:12px 18px; border-bottom:1px solid #eee;">${formData.mobile || "-"}</td>
            </tr>
            <tr>
              <td style="padding:12px 18px; font-weight:600; background:#f9fafb;">IP Address</td>
              <td style="padding:12px 18px;">${formData.ip || "-"}</td>
            </tr>
          </tbody>
        </table>

        <!-- Message Section -->
        <div style="background:#f5faff; padding:15px 20px; border-top:1px solid #e0e0e0;">
          <p style="margin:0; font-size:15px; color:#333;">
            📞 <strong>Follow up</strong> with this lead at the earliest.  
            Please ensure a personalized response for better conversion.
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#002b3d; color:#fff; text-align:center; padding:10px 0; font-size:12px;">
          <p style="margin:0;">© ${new Date().getFullYear()} Luxury Villas Tellapur | Aureal Consulting</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// ✅ TeleCRM Integration (corrected using PHP reference)
const pushToTeleCRM = async (lead) => {
  const telecrmUrl =
    "https://api.telecrm.in/enterprise/669f8deb9c0669c069b90fc3/autoupdatelead";
  const telecrmAuth =
    "Bearer dfc2d8a1-cca4-4226-b121-ebe4b22f6b071721799771196:b0f4940e-3a88-4941-9f34-5485c382e5d7";

  // ✅ working  payload
  const payload = {
    fields: {
      name: lead.name,
      phone: lead.mobile,
      email: lead.email,
      ip_address: lead.ip,
    },
    actions: [
      {
        type: "SYSTEM_NOTE",
        text: "Lead Source: Luxury Villas Tellapur Website",
      },
    ],
  };

  console.log("📤 Sending to TeleCRM:", JSON.stringify(payload, null, 2));

  try {
    const response = await axios.post(telecrmUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: telecrmAuth,
      },
    });
    console.log("✅ TeleCRM Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ TeleCRM Error:", error.response?.data || error.message);
    throw new Error("Failed to push lead to TeleCRM");
  }
};

// ✅ Main route
app.post("/home/send-email", async (req, res) => {
  const { name, email, mobile } = req.body;
  const ip = req.clientIp || "Unknown";
  console.log("📩 Incoming Lead:", { name, email, mobile, ip });

  if (!name || !email || !mobile) {
    return res.status(400).json({ error: "Name, email, and mobile are required." });
  }

  try {
    console.log("➡️ Sending Auto Reply...");
    await sendAutoReply(email, name);
    console.log("✅ Auto Reply Sent");

    console.log("➡️ Notifying Admin...");
    await notifyAdmin({ name, email, mobile, ip });
    console.log("✅ Admin Notified");

    console.log("➡️ Pushing to TeleCRM...");
    await pushToTeleCRM({ name, email, mobile, ip });
    console.log("✅ TeleCRM Lead Created");

    res.status(200).json({ message: "Emails sent and lead added to TeleCRM successfully" });
  } catch (error) {
    console.error("❌ FULL ERROR LOG:", error);
    res.status(500).json({ error: "Something went wrong", details: error.message });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
