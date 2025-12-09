# EmailJS Setup Instructions

This form uses EmailJS to send form submissions via email for free (200 emails/month on free tier).

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Application Form Submission

**Subject:** New Application Form Submission from {{from_name}}

**Content:**
```
A site visitor just submitted your form Application Form on ONLYMODELS.CA

---

Submission summary:

Name: {{name}}
Country/Region: {{country}}
Email: {{email}}
WhatsApp Phone Number: {{phone}}

Links To Your Social Profiles:
{{social_links}}

Message: {{message_text}}
```

4. Set **To Email** to: `onlymodels.ca@gmail.com` (or your desired email)
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{from_email}}`
7. Click **Save**
8. Copy the **Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find **API Keys** section
3. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same folder as `package.json`)

2. Add the following content to `.env.local` and fill in your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   NEXT_PUBLIC_RECIPIENT_EMAIL=onlymodels.ca@gmail.com
   ```

3. Replace the placeholder values with your actual EmailJS credentials from Steps 2-4

4. Save the file

**Note:** `.env.local` is already in `.gitignore`, so your credentials won't be committed to git.

## Step 6: Restart Development Server

After adding environment variables, restart your development server:
```bash
npm run dev
```

## Testing

1. Fill out the form on your website
2. Submit the form
3. Check the recipient email inbox for the submission

## Free Tier Limits

- **200 emails per month** on the free tier
- If you need more, upgrade to a paid plan

## Troubleshooting

- Make sure all environment variables are set correctly
- Check browser console for any errors
- Verify your EmailJS service is active
- Ensure your email template has all required variables

