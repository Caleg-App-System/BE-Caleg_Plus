const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const {
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  GOOGLE_SENDER_EMAIL,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);

// p :ehsgsepbaaqxipwh

oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
module.exports = {
  sendEmail: async (dataEmail) => {
    return new Promise(async (resolve, reject) => {
      try {
        const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: "ofc.calegplus@gmail.com",
            pass: "ehsgsepbaaqxipwh",
          },
        });

        const response = await transport.sendMail(dataEmail);

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
