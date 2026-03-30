'use server';

import sgMail from '@sendgrid/mail';

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;
  
  // Check for environment variable
  const apiKey = process.env.SEND_GRID_API_KEY;
  if (!apiKey) {
    throw new Error('SEND_GRID_API_KEY is not defined in environment variables');
  }

  // Set API key
  sgMail.setApiKey(apiKey);

  // Prepare email message
  const msg = {
    to: 'wadoodnasir4@gmail.com', // Recipient (portfolio owner)
    from: 'wadoodnasir4@gmail.com', // Must be verified sender in SendGrid
    subject: `Portfolio Contact: Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('SendGrid Error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
} 