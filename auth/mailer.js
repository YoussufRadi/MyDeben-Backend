import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'deben.reset@gmail.com',
    pass: 'test123.',
  },
});

export const resetMail = reciever => ({
  from: 'deben.reset@gmail.com',
  to: reciever.email,
  subject: 'Password Reset Email',
  text: 'You Requested to reset your password',
  html: `<!DOCTYPE html>
          <html>

          <head>
              <title>Forget Password Email</title>
          </head>

          <body>
              <div>
                  <h3>Dear ${reciever.name},</h3>
                  <p>You requested for a password reset, kindly use this <a href="{{url}}">link</a> to reset your password</p>
                  <br>
                  <p>Cheers!</p>
              </div>
            
          </body>

          </html>
`, // html body
});

export const sucessMail = reciever => ({
  from: 'deben.reset@gmail.com',
  to: reciever.email,
  subject: 'Password Reset Successfully',
  text: 'You Requested to reset your password',
  html: `<!DOCTYPE html>
          <html>

          <head>
              <title>Password Reset</title>
          </head>

          <body>
              <div>
                  <h3>Dear ${reciever.name},</h3>
                  <p>Your password has been successful reset, you can now login with your new password.</p>
                  <br>
                  <div>
                      Cheers!
                  </div>
              </div>
            
          </body>

          </html>`,
});

export const sendMail = (mailOptions, cb) =>
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
    cb(error, info);
  });
