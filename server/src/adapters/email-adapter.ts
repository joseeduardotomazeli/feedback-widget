export interface SendEmailData {
  subject: string;
  body: string;
}

interface EmailAdapter {
  sendEmail: (data: SendEmailData) => Promise<void>;
}

export default EmailAdapter;
