// Email service for sending confirmations and notifications
// This would typically use a service like EmailJS, SendGrid, or Nodemailer

interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

interface BookingEmailData {
  customerEmail: string;
  barberEmail: string;
  customerName: string;
  barberName: string;
  service: string;
  date: string;
  time: string;
  address: string;
  amount: number;
  bookingId: string;
}

class EmailService {
  private apiKey: string;
  private fromEmail: string;

  constructor() {
    // In production, these would come from environment variables
    this.apiKey = process.env.REACT_APP_EMAIL_API_KEY || '';
    this.fromEmail = 'noreply@trimbuddy.com';
  }

  // Send verification email after registration
  async sendVerificationEmail(email: string, name: string, verificationToken: string): Promise<boolean> {
    const verificationLink = `${window.location.origin}/verify-email?token=${verificationToken}`;
    
    const emailData: EmailData = {
      to: email,
      subject: 'Welcome to TrimBuddy - Verify Your Email',
      html: this.getVerificationEmailTemplate(name, verificationLink),
      from: this.fromEmail
    };

    return this.sendEmail(emailData);
  }

  // Send booking confirmation emails to both customer and barber
  async sendBookingConfirmation(bookingData: BookingEmailData): Promise<boolean> {
    try {
      // Send to customer
      const customerEmailData: EmailData = {
        to: bookingData.customerEmail,
        subject: 'Booking Confirmed - TrimBuddy',
        html: this.getCustomerBookingTemplate(bookingData),
        from: this.fromEmail
      };

      // Send to barber
      const barberEmailData: EmailData = {
        to: bookingData.barberEmail,
        subject: 'New Booking Request - TrimBuddy',
        html: this.getBarberBookingTemplate(bookingData),
        from: this.fromEmail
      };

      const customerResult = await this.sendEmail(customerEmailData);
      const barberResult = await this.sendEmail(barberEmailData);

      return customerResult && barberResult;
    } catch (error) {
      console.error('Error sending booking confirmation emails:', error);
      return false;
    }
  }

  // Send booking cancellation emails
  async sendCancellationEmail(bookingData: BookingEmailData, cancelledBy: 'customer' | 'barber'): Promise<boolean> {
    try {
      const customerEmailData: EmailData = {
        to: bookingData.customerEmail,
        subject: 'Booking Cancelled - TrimBuddy',
        html: this.getCancellationEmailTemplate(bookingData, cancelledBy, 'customer'),
        from: this.fromEmail
      };

      const barberEmailData: EmailData = {
        to: bookingData.barberEmail,
        subject: 'Booking Cancelled - TrimBuddy',
        html: this.getCancellationEmailTemplate(bookingData, cancelledBy, 'barber'),
        from: this.fromEmail
      };

      const customerResult = await this.sendEmail(customerEmailData);
      const barberResult = await this.sendEmail(barberEmailData);

      return customerResult && barberResult;
    } catch (error) {
      console.error('Error sending cancellation emails:', error);
      return false;
    }
  }

  // Generic email sending method
  private async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      // Using EmailJS as an example - replace with your preferred service
      // For production, you'd use a backend service with proper SMTP
      
      // Mock implementation - replace with actual email service
      console.log('Sending email:', emailData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  // Email templates
  private getVerificationEmailTemplate(name: string, verificationLink: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to TrimBuddy</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ffbe0b, #e6a500); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #ffbe0b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✂️ Welcome to TrimBuddy!</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for joining TrimBuddy! We're excited to have you as part of our community.</p>
            <p>To complete your registration and start booking professional barber services, please verify your email address:</p>
            <div style="text-align: center;">
              <a href="${verificationLink}" class="button">Verify Email Address</a>
            </div>
            <p>If the button doesn't work, copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #666;">${verificationLink}</p>
            <p>This verification link will expire in 24 hours.</p>
            <p>If you didn't create this account, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>The TrimBuddy Team</p>
            <p>📞 +91 9663427720 | 📧 ashoka6031@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getCustomerBookingTemplate(data: BookingEmailData): string {
    const modifyLink = `${window.location.origin}/customer-dashboard?booking=${data.bookingId}`;
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Confirmed - TrimBuddy</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ffbe0b, #e6a500); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffbe0b; }
          .button { display: inline-block; background: #ffbe0b; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 5px; }
          .button-secondary { background: #6c757d; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Booking Confirmed!</h1>
          </div>
          <div class="content">
            <h2>Hi ${data.customerName},</h2>
            <p>Great news! Your booking has been confirmed. Here are the details:</p>
            
            <div class="booking-details">
              <h3>Booking Details</h3>
              <p><strong>Booking ID:</strong> #${data.bookingId}</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>Barber:</strong> ${data.barberName}</p>
              <p><strong>Date & Time:</strong> ${data.date} at ${data.time}</p>
              <p><strong>Location:</strong> ${data.address}</p>
              <p><strong>Amount:</strong> ₹${data.amount}</p>
            </div>

            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Your barber will call you 30 minutes before arrival</li>
              <li>Please ensure you're available at the scheduled time</li>
              <li>Have the exact amount ready if paying by cash</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${modifyLink}" class="button">View/Modify Booking</a>
              <a href="https://wa.me/919663427720" class="button button-secondary">Contact Support</a>
            </div>

            <p>Need to make changes? You can reschedule or cancel up to 2 hours before your appointment.</p>
          </div>
          <div class="footer">
            <p>Thank you for choosing TrimBuddy!</p>
            <p>📞 +91 9663427720 | 📧 ashoka6031@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getBarberBookingTemplate(data: BookingEmailData): string {
    const acceptLink = `${window.location.origin}/barber-dashboard?action=accept&booking=${data.bookingId}`;
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Booking Request - TrimBuddy</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ffbe0b, #e6a500); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745; }
          .button { display: inline-block; background: #28a745; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 5px; }
          .button-danger { background: #dc3545; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💼 New Booking Request</h1>
          </div>
          <div class="content">
            <h2>Hi ${data.barberName},</h2>
            <p>You have a new booking request! Please review the details below:</p>
            
            <div class="booking-details">
              <h3>Booking Details</h3>
              <p><strong>Booking ID:</strong> #${data.bookingId}</p>
              <p><strong>Customer:</strong> ${data.customerName}</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>Date & Time:</strong> ${data.date} at ${data.time}</p>
              <p><strong>Location:</strong> ${data.address}</p>
              <p><strong>Amount:</strong> ₹${data.amount}</p>
            </div>

            <p><strong>Action Required:</strong></p>
            <p>Please accept or decline this booking within 2 hours. If you accept, remember to:</p>
            <ul>
              <li>Call the customer 30 minutes before arrival</li>
              <li>Arrive on time with all necessary equipment</li>
              <li>Maintain professional standards</li>
            </ul>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${acceptLink}" class="button">Accept Booking</a>
              <a href="${acceptLink}&action=decline" class="button button-danger">Decline Booking</a>
            </div>
          </div>
          <div class="footer">
            <p>TrimBuddy Partner Network</p>
            <p>📞 +91 9663427720 | 📧 ashoka6031@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getCancellationEmailTemplate(data: BookingEmailData, cancelledBy: 'customer' | 'barber', recipient: 'customer' | 'barber'): string {
    const isCustomer = recipient === 'customer';
    const cancelledByText = cancelledBy === 'customer' ? 'you' : 'the barber';
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Cancelled - TrimBuddy</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc3545; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545; }
          .button { display: inline-block; background: #ffbe0b; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 5px; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>❌ Booking Cancelled</h1>
          </div>
          <div class="content">
            <h2>Hi ${isCustomer ? data.customerName : data.barberName},</h2>
            <p>We're sorry to inform you that booking #${data.bookingId} has been cancelled by ${cancelledByText}.</p>
            
            <div class="booking-details">
              <h3>Cancelled Booking Details</h3>
              <p><strong>Booking ID:</strong> #${data.bookingId}</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>${isCustomer ? 'Barber' : 'Customer'}:</strong> ${isCustomer ? data.barberName : data.customerName}</p>
              <p><strong>Date & Time:</strong> ${data.date} at ${data.time}</p>
              <p><strong>Amount:</strong> ₹${data.amount}</p>
            </div>

            ${isCustomer ? `
              <p><strong>Refund Information:</strong></p>
              <p>If you paid online, your refund will be processed within 3-5 business days. For cash payments, no action is needed.</p>
            ` : ''}

            <div style="text-align: center; margin: 30px 0;">
              <a href="${window.location.origin}/${isCustomer ? 'book-service' : 'barber-dashboard'}" class="button">
                ${isCustomer ? 'Book Another Service' : 'View Dashboard'}
              </a>
            </div>

            <p>We apologize for any inconvenience. If you have any questions, please contact our support team.</p>
          </div>
          <div class="footer">
            <p>TrimBuddy Support Team</p>
            <p>📞 +91 9663427720 | 📧 ashoka6031@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();
export default EmailService;