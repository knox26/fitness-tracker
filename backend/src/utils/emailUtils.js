import nodemailer from "nodemailer";

console.log(process.env.FROM_EMAIL);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL || "abhianarase9422@gmail.com",
    pass: process.env.SMTP_PASS || "lueiqhkybimiskzb",
  },
});

//crate the email html template

const sendVerifyEmailOtp = async (otp, to) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
        }
        .email-body {
            padding: 20px;
            text-align: center;
            color: #333333;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin: 20px 0;
        }
        .email-footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>OTP Verification</h1>
        </div>
        <div class="email-body">
            <p>Hello,</p>
            <p>We received a request to verify your account. Use the OTP below to proceed:</p>
            <p class="otp">${otp}</p>
            <p>If you did not request this, please ignore this email or contact support.</p>
        </div>
        <div class="email-footer">
            <p>&copy; 2024 Fitness-Tracker.xyz . All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

  const mailOptions = {
    from: "Fitness Tracker",
    to: to,
    subject: "Email Verfication",
    html: html,
  };

  await transporter.sendMail(mailOptions);
};

const sendResetPasswordOtpEmail = async (otp, to) => {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Verification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .email-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .email-header {
              background-color: #007bff;
              color: #ffffff;
              text-align: center;
              padding: 20px;
          }
          .email-header h1 {
              margin: 0;
              font-size: 24px;
          }
          .email-body {
              padding: 20px;
              text-align: center;
              color: #333333;
          }
          .otp {
              font-size: 24px;
              font-weight: bold;
              color: #007bff;
              margin: 20px 0;
          }
          .email-footer {
              background-color: #f4f4f4;
              text-align: center;
              padding: 10px;
              font-size: 12px;
              color: #666666;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <div class="email-header">
              <h1>OTP Verification</h1>
          </div>
          <div class="email-body">
              <p>Hello,</p>
              <p>We received a request to reset password. Use the OTP below to proceed:</p>
              <p class="otp">${otp}</p>
              <p>If you did not request this, please ignore this email or contact support.</p>
          </div>
          <div class="email-footer">
              <p>&copy; 2024 Fitness-Tracker.xyz . All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: "Fitness Tracker",
    to: to,
    subject: "Email Verfication",
    html: html,
  };

  await transporter.sendMail(mailOptions);
};

export { sendVerifyEmailOtp, sendResetPasswordOtpEmail };
