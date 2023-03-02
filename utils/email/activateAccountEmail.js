const { header, footer } = require("./template");

const activateAccount = (link) => {
  const content = `
  <p>
    You received this email because your account has been registered at CalegPlus
    <br>
    Immediately activate your account by clicking the button below.
  </p>
  
  <a href="${link}" style="color: white;" class="auth-button">Activate Account</a>
  
  <p>
  If you don't feel like registering an account at CalegPlus, please ignore this email.
    <br>
    Link alternatif: <a href="${link}">${link}</a>
  </p>
  

  <hr>
  
  <p>Copyright &copy; ${new Date().getFullYear()} CalegPlus`;

  return header + content + footer;
};

module.exports = activateAccount;
