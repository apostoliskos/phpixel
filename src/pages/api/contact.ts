import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { parse } from 'querystring'; // <-- NEW IMPORT

export const POST: APIRoute = async ({ request, redirect }) => {
		// 🛑 CHANGE 1: Read the raw text body
		const bodyText = await request.text();
	console.log('11111111111111111'); // <-- Log the raw string
	console.log('Raw Body Text:', bodyText); // <-- Log the raw string
		// 🛑 CHANGE 2: Parse the raw query string
		const dataObject = parse(bodyText);

	// Extract variables from the parsed object (you must now use dataObject.*)
	const name = dataObject.Name as string;
	const email = dataObject.Email as string;
	const source = dataObject.Source as string;
	const message = dataObject.Message as string;

	// Basic validation
	if (!name || !email || !message) {
		return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
	}

	// 1. Create a transporter using your hosting details
// src/pages/api/contact.ts

	const transporter = nodemailer.createTransport({
		host: import.meta.env.SMTP_HOST,
		port: parseInt(import.meta.env.SMTP_PORT),
		secure: true, // MUST be true for Port 465
		auth: {
			user: import.meta.env.SMTP_USER,
			pass: import.meta.env.SMTP_PASS,
		},
		tls: {
			// 🛑 CRITICAL FIX: Bypass the certificate hostname mismatch
			rejectUnauthorized: false
			// You can optionally add this, as sometimes the server requires
			// a different domain name for the certificate check:
			// servername: 'mail.phpixel.gr'
		},
		// 💡 Optional: Explicitly tell Nodemailer to enforce TLS/SSL,
		// though 'secure: true' should handle this.
		// requireTLS: true,
	});
// ... rest of your code

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