const request = require("request");

const verify = (req, res) => {
  if (!req.body.captcha) {
    res.json({ msg: "captcha token is undefined" });
  }

  const secretKey = "6LdXqLUUAAAAAD_YdROlwgsD_lX-LZvCDMtwHCUe";
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

  request(verifyUrl, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    body = JSON.parse(body);
    if (!body.success || body.score < 0.4) {
      return res.json({
        valido: false,
        msg: "Você pode ser um robô, desculpe!! Você está banido",
        score: body.score
      });
    }

    // document.getElementById('form').submit();

    return res.json({
      valido: true,
      msg: "Você foi verificado! Você pode prosseguir",
      score: body.score
    });
  });
};

module.exports = verify;
