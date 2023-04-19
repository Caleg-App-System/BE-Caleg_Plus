const { header, footer } = require("./template");

const activateAccount = (link) => {
  const content = `
  <p>
    // You received this email because your account has been registered at CalegPlus
    Kamu menerima email ini karena akun kamu telah terdaftar di CalegPlus
    <br>
    // Immediately activate your account by clicking the button below.
    Segera aktivasi akun kamu dengan mengklik tombol di bawah ini.
  </p>
  
  <a href="${link}" style="color: white;" class="auth-button">Aktivasi Akun</a>
  
  <p>
  // If you don't feel like registering an account at CalegPlus, please ignore this email.
  Jika kamu tidak merasa ingin mendaftar akun di CalegPlus, abaikan email ini.
    <br>
    Link alternatif: <a href="${link}">${link}</a>
  </p>
  

  <hr>
  
  <p>Copyright &copy; ${new Date().getFullYear()} CalegPlus`;

  return header + content + footer;
};

module.exports = activateAccount;
