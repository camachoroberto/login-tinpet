document.getElementById('form').addEventListener('submit', runVerify);

function runVerify(e) {
  console.log(e);
  e.preventDefault();
  runCaptcha();
}

function runCaptcha() {
  grecaptcha
    .execute('6LdXqLUUAAAAAI9r6Y98VCSM4UxSQjlUHxTnvqiC', { action: 'homepage' })
    .then((token) => {
      const userName = document.querySelector('#username');
      const password = document.querySelector('#password');
      const captcha = token;
      sendData(userName, password, captcha);
    });

  function sendData(userName, password, captcha) {
    const info = JSON.stringify({
      userName,
      password,
      captcha,
    });

    fetch('/verify', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: info,
    })
      .then(res => res.json())
      .then((data) => {
        // if (data.valido == false) alert(`msg: ${data.msg}, score: ${data.score}`);
        alert(`msg: ${data.msg}, score: ${data.score}`);
        console.log(`msg: ${data.msg}, score: ${data.score}`);
        document.getElementById('form').submit();
      });
  }
}
