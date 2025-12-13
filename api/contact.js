import nodemailer from "nodemailer";

export async function POST({ request }) {
	const formData = await request.formData();

	const Name = formData.get("Name");
	const Email = formData.get("Email");
	const Message = formData.get("Message");
	const Source = formData.get("Source");

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"PHPixel Contact" <${process.env.MAIL_USER}>`,
			to: "hello@phpixel.gr",
			replyTo: Email,
			subject: "New Contact Form Submission",
			text: `
Name: ${Name}
Email: ${Email}
Source: ${Source}

Message:
${Message}
      `,
		});

		return new Response(null, {
			status: 302,
			headers: {
				Location: "/contact-thank-you",
			},
		});
	} catch (error) {
		console.error("Email error:", error);

		return new Response(
			JSON.stringify({ success: false }),
			{ status: 500 }
		);
	}
}
