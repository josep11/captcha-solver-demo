const API_KEY = process.env.ANTI_CAPTCHA_API_KEY || null;

if (!API_KEY) {
    throw new Error('need to set env for ANTI_CAPTCHA_API_KEY');
}

const ac = require("@antiadmin/anticaptchaofficial");
ac.setAPIKey(API_KEY);
ac.getBalance()
    .then(balance => console.log('my balance is $' + balance))
    .catch(error => console.log('received error ' + error))
ac.shutUp();

const getCaptchaString = async (base64String) => {
    let captchaCode = await ac.solveImage(base64String, true);
    if (!captchaCode) captchaCode = '';
    return captchaCode;
};

module.exports = getCaptchaString