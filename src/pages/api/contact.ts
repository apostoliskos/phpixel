import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request, redirect }) => {
	const data = await request.formData();
	const name = data.get("Name");
	const email = data.get("Email");
	const source = data.get("Source"); // Don't forget this field!
	const message = data.get("Message");

	// Basic validation
	if (!name || !email || !message) {
		return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
	}

	// 1. Create a transporter using your hosting details
	const transporter = nodemailer.createTransport({
		host: import.meta.env.SMTP_HOST,
		port: parseInt(import.meta.env.SMTP_PORT), // Make sure port is a number
		secure: import.meta.env.SMTP_PORT === '465', // Often true if using port 465
		auth: {
			user: import.meta.env.SMTP_USER,
			pass: import.meta.env.SMTP_PASS,
		},
		// Adding this option may help if you have issues connecting from Vercel's IP
		// tls: {
		//   rejectUnauthorized: false
		// }
	});

	try {
		// 2. Define the email content
		await transporter.sendMail({
			from: import.meta.env.SMTP_USER, // Will show up as hello@phpixel.gr
			to: import.meta.env.SMTP_USER,   // Sending the message TO yourself
			subject: `[New Contact] Submission from ${name}`,
			html: `
        <h2>New Message from Your Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		});

		// 3. Success response
		// Ensure you have a /success page, or change the redirect path
		return redirect("/success");

	} catch (error) {
		console.error("Email sending failed:", error);
		// 4. Error response
		return new Response(JSON.stringify({ message: "Failed to send email. Check server logs." }), { status: 500 });
	}
};