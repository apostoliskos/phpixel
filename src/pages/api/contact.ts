import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { parse } from 'querystring';


export const POST: APIRoute = async ({ request, redirect, cookies }) => {
	const bodyText = await request.text();
	const dataObject = parse(bodyText);

	const name = dataObject.Name as string;
	const email = dataObject.Email as string;
	const source = dataObject.Source as string;
	const message = dataObject.Message as string;

	if (!name || !email || !message) {
		return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
	}

	const transporter = nodemailer.createTransport({
		host: import.meta.env.SMTP_HOST,
		port: parseInt(import.meta.env.SMTP_PORT),
		secure: true,
		auth: {
			user: import.meta.env.SMTP_USER,
			pass: import.meta.env.SMTP_PASS,
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	const cookieOptions = {
		httpOnly: true,
		maxAge: 3600,
		path: '/'
	};

	try {
		await transporter.sendMail({
			from: import.meta.env.SMTP_USER,
			to: import.meta.env.SMTP_USER,
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

		cookies.set('form_status', 'sent', cookieOptions);
		cookies.set('form_name', name, cookieOptions);
		cookies.set('form_email', email, cookieOptions);

		return redirect("/success");

	} catch (error) {

		cookies.set('form_status', 'error', cookieOptions);
		cookies.set('form_name', name, cookieOptions);
		cookies.set('form_email', email, cookieOptions);

		return redirect("/fail");
	}
};