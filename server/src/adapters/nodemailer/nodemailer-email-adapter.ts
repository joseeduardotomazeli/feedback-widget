import nodemailer from 'nodemailer';

import EmailAdapter, { SendEmailData } from '../email-adapter';

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

class NodemailerEmailAdapter implements EmailAdapter {
  async sendEmail(data: SendEmailData) {
    const { subject, body } = data;

    await transport.sendMail({
      from: 'Equipe Feedback Widget <equipe@feedback-widget.com>',
      to: 'José Eduardo Tomazeli <joseeduardo.tomazeli@outlook.com>',
      subject,
      html: body,
    });
  }
}

export default NodemailerEmailAdapter;
