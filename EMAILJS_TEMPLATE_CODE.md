# EmailJS Template Code

Copy and paste this template code directly into your EmailJS template editor.

## Template Settings

**Template Name:** Application Form Submission

**To Email:** `onlymodels.ca@gmail.com` (or your desired recipient email)

**From Name:** `{{from_name}}`

**Reply To:** `{{reply_to}}`

**Subject:** `New Application Form Submission from {{name}}`

## Template Content (HTML - Recommended)

Copy this HTML code into the EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .field {
      margin-bottom: 12px;
    }
    .label {
      font-weight: bold;
      color: #555;
    }
    .value {
      color: #000;
      word-break: break-word;
    }
    .link {
      color: #0066cc;
      text-decoration: none;
    }
    .link:hover {
      text-decoration: underline;
    }
    .section {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
  </style>
</head>
<body>
  <div class="header">
    <p>A site visitor just submitted your form <strong>Application Form</strong> on <strong>ONLYMODELS.CA</strong></p>
  </div>

  <h2 style="margin-top: 0;">Submission summary:</h2>

  <div class="field">
    <span class="label">Name:</span> <span class="value">{{name}}</span>
  </div>

  <div class="field">
    <span class="label">Country/Region:</span> <span class="value">{{country}}</span>
  </div>

  <div class="field">
    <span class="label">Email:</span> 
    <a href="mailto:{{email}}" class="link">{{email}}</a>
  </div>

  <div class="field">
    <span class="label">WhatsApp Phone Number:</span> 
    <a href="tel:{{phone}}" class="link">{{phone}}</a>
  </div>

  <div class="section">
    <div class="field">
      <span class="label">Links To Your Social Profiles:</span>
    </div>
    <div style="margin-left: 20px; margin-top: 8px;">
      {{social_links}}
    </div>
  </div>

  <div class="section">
    <div class="field">
      <span class="label">Message:</span>
    </div>
    <div class="value" style="margin-top: 8px; white-space: pre-wrap;">{{message_text}}</div>
  </div>
</body>
</html>
```

## Template Content (Plain Text - Alternative)

If you prefer plain text format, use this:

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

## Template Variables Reference

The template uses these variables (automatically sent from the form):

- `{{name}}` - Applicant's name
- `{{country}}` - Country/Region
- `{{email}}` - Email address (clickable in HTML version)
- `{{phone}}` - Phone number (clickable in HTML version)
- `{{instagram}}` - Instagram username/link (if provided)
- `{{tiktok}}` - TikTok username/link (if provided)
- `{{twitter}}` - Twitter username/link (if provided)
- `{{onlyfans}}` - OnlyFans link (if provided)
- `{{social_links}}` - Combined social links text
- `{{message_text}}` - Message from applicant
- `{{from_name}}` - Used in "From Name" field
- `{{reply_to}}` - Used in "Reply To" field

## How to Use

1. Go to EmailJS Dashboard > Email Templates
2. Click "Create New Template"
3. Fill in the Template Settings above
4. Paste the HTML template code into the template editor
5. Click "Save"
6. Copy the Template ID and use it in your `.env.local` file

## Notes

- The HTML template includes clickable links for email and phone
- Social media links will show "No social links provided" if none are filled
- The message will show "No message provided" if left empty
- All variables are automatically populated from the form submission
- Email and phone numbers are clickable links in the HTML version

