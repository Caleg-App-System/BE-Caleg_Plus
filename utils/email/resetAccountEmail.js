const { header, footer } = require("./template");

const resetAccount = (link) => {
  const content = `
  <p>
  // You received this email because you have made a Password Reset request at SiTerbang.
  Kamu menerima email ini karena kamu telah melakukan permintaan untuk mereset password di SiTerbang.
    <br>
    // Change your password immediately by clicking the button below.
    Ganti password kamu segera dengan mengklik tombol di bawah ini.
  </p>
  
  <a href="${link}" style="color: white;" class="auth-button">Reset Password</a>
  
  <p>
    // If you don't think you have made a Password Reset request at SiTerbang, please ignore this email.
    Jika kamu tidak merasa telah melakukan permintaan untuk mereset password di SiTerbang, abaikan email ini.
    <br>
    Alternative link: <a href="${link}">${link}</a>
  </p>
  

  <hr>
  
  <p>Copyright &copy; ${new Date().getFullYear()} CalegPlus`;

  return header + content + footer;
};

module.exports = resetAccount;
