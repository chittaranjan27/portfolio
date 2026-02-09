# EmailJS Setup Instructions

Your contact form is now configured to use EmailJS for sending emails. Follow these steps to set it up:

## Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Add an Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address (optional)

4. Example template:
   ```
   Subject: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Copy the **Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root of your project
2. Add the following variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace the placeholder values with your actual credentials

## Step 6: Restart Your Development Server
After creating/updating the `.env` file, restart your dev server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message
4. If it doesn't work, check the browser console for any error messages

## Troubleshooting
- Make sure all three environment variables are set correctly
- Verify your EmailJS service is active
- Check that your email template uses the correct variable names
- Ensure you haven't exceeded the free tier limit (200 emails/month)
- Check browser console for specific error messages
