import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { Name, Email, Message } = req.body;

	try {
		// Set up transporter (using Gmail example)
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: "hello@phpixel.gr",
			subject: "New Contact Form Submission",
			text: `
Name: ${Name}
Email: ${Email}
Message: ${Message}
      `,
		});

		res.status(200).json({ success: true });
	} catch (error) {
		console.error("Email error:", error);
		res.status(500).json({ success: false });
	}
}
