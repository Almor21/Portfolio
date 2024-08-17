import nodemailer from 'nodemailer';
import { DataEmail } from '@/types/data';

export async function sendEmail(data: DataEmail) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_ACCOUNT,
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	let mailOptions = {
		from: process.env.GMAIL_ACCOUNT,
		to: process.env.GMAIL_TO_ACCOUNT,
		subject: `Portfolio Message from ${data.name}`,
		html:
			'<p>Hello Edinson,</p>' +
			`<p>You got a new message from ${data.name}:</p>` +
			`<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${data.message}</p>` +
			'<p>------------------------------------------------------------------------------</p>' +
			`<p>Name: ${data.name}</p>` +
            `<p>Email: ${data.email}</p>`
    };
    
	const info = await transporter.sendMail(mailOptions)
	console.log('Sent Gmail.', info.response)
}
