type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail(input: SendEmailInput) {
  return {
    id: `email_${Date.now()}`,
    delivered: true,
    ...input
  };
}
