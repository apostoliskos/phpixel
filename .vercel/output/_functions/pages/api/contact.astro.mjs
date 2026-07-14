import nodemailer from 'nodemailer';
import { parse } from 'querystring';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect, cookies }) => {
  const bodyText = await request.text();
  const dataObject = parse(bodyText);
  const name = dataObject.Name;
  const email = dataObject.Email;
  const source = dataObject.Source;
  const message = dataObject.Message;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
  }
  const transporter = nodemailer.createTransport({
    host: undefined                         ,
    port: parseInt(undefined                         ),
    secure: true,
    auth: {
      user: undefined                         ,
      pass: undefined                         
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const cookieOptions = {
    httpOnly: true,
    maxAge: 3600,
    path: "/"
  };
  try {
    await transporter.sendMail({
      from: undefined                         ,
      to: undefined                         ,
      subject: `[New Contact] Submission from ${name}`,
      html: `
        <h2>New Message from Your Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Source:</strong> ${source}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    cookies.set("form_status", "sent", cookieOptions);
    cookies.set("form_name", name, cookieOptions);
    cookies.set("form_email", email, cookieOptions);
    return redirect("/success");
  } catch (error) {
    cookies.set("form_status", "error", cookieOptions);
    cookies.set("form_name", name, cookieOptions);
    cookies.set("form_email", email, cookieOptions);
    return redirect("/fail");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
