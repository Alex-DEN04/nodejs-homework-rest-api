const sgMeil = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, EMAIL } = process.env;

sgMeil.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL };
  await sgMeil.send(email);
  return true;
};

module.exports = sendEmail;
