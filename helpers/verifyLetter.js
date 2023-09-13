require("dotenv").config();
const { BASE_URL } = process.env;

const verifyLetter = (email, verificationToken) => {
  return {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };
};

module.exports = verifyLetter;
