import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

# Email configuration
EMAIL_ADDRESS = "hello@botscribe.info"  # Your Google Workspace email
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")  # Get from environment variable
ADMIN_EMAILS = ["ihamzakhan89@gmail.com", "sondeadeeb@gmail.com"]

def send_email(subject, html_content, recipients, reply_to=None):
    """Send an email to the specified recipients."""
    if not EMAIL_PASSWORD:
        return {"success": False, "message": "Email password not configured"}
    
    message = MIMEMultipart("alternative")
    message["Subject"] = subject
    message["From"] = EMAIL_ADDRESS
    message["To"] = ", ".join(recipients)
    
    if reply_to:
        message["Reply-To"] = reply_to
    
    # Add HTML content
    html_part = MIMEText(html_content, "html")
    message.attach(html_part)
    
    # Create secure connection and send email
    try:
        # For Google Workspace, use smtp.gmail.com
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, recipients, message.as_string())
        return {"success": True, "message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {e}")
        return {"success": False, "message": str(e)}

@app.route('/send-contact-email', methods=['POST'])
def handle_contact_email():
    """Handle contact form submissions."""
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        # Validate required fields
        if not all([name, email, subject, message]):
            return jsonify({"success": False, "message": "Missing required fields"}), 400
        
        # Email to admins
        admin_subject = f"New Contact Form Submission: {subject}"
        admin_html = f"""
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
        """
        
        admin_result = send_email(admin_subject, admin_html, ADMIN_EMAILS, reply_to=email)
        
        # Email to client
        client_subject = "We've Received Your Message - BotScribe"
        client_html = f"""
        <h1>Thank You for Contacting Us</h1>
        <p>Dear {name},</p>
        <p>We have received your message regarding "{subject}". Our team will review it and get back to you as soon as possible.</p>
        <p>If you have any urgent matters, please contact us directly at hello@botscribe.info.</p>
        <p>Best regards,<br>The BotScribe Team</p>
        """
        
        client_result = send_email(client_subject, client_html, [email])
        
        return jsonify({"success": True, "message": "Message sent successfully! We'll get back to you soon."})
    
    except Exception as e:
        print(f"Error processing contact form: {e}")
        return jsonify({"success": False, "message": "Failed to send message. Please try again or contact us directly."}), 500

@app.route('/send-schedule-email', methods=['POST'])
def handle_schedule_email():
    """Handle meeting scheduling submissions."""
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        date = data.get('date')
        time = data.get('time')
        phone = data.get('phone', "Not provided")
        
        # Validate required fields
        if not all([name, email, date, time]):
            return jsonify({"success": False, "message": "Missing required fields"}), 400
        
        # Format the date
        from datetime import datetime
        formatted_date = datetime.fromisoformat(date.replace('Z', '+00:00')).strftime("%A, %B %d, %Y")
        
        # Email to admins
        admin_subject = f"New Meeting Request: {name}"
        admin_html = f"""
        <h1>New Meeting Request</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Date:</strong> {formatted_date}</p>
        <p><strong>Time:</strong> {time}</p>
        """
        
        admin_result = send_email(admin_subject, admin_html, ADMIN_EMAILS, reply_to=email)
        
        # Email to client
        client_subject = "Meeting Request Confirmation - BotScribe"
        client_html = f"""
        <h1>Meeting Request Confirmation</h1>
        <p>Dear {name},</p>
        <p>Thank you for scheduling a meeting with BotScribe. We have received your request for:</p>
        <p><strong>Date:</strong> {formatted_date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p>Our team will review your request and confirm the meeting shortly.</p>
        <p>If you need to make any changes, please contact us at hello@botscribe.info.</p>
        <p>Best regards,<br>The BotScribe Team</p>
        """
        
        client_result = send_email(client_subject, client_html, [email])
        
        return jsonify({
            "success": True, 
            "message": "Meeting scheduled successfully! We've sent you a confirmation email."
        })
    
    except Exception as e:
        print(f"Error scheduling meeting: {e}")
        return jsonify({"success": False, "message": "Failed to schedule meeting. Please try again or contact us directly."}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
