const assert = require('assert');
const fs = require('fs').promises;
const getCaptchaString = require('../captcha-solver');

let base64;

describe('Testing captcha solver', () => {

    it('should get base64 image from disk', async () => {

        base64 = await fs.readFile('./res/captcha2.gif', { encoding: 'base64' });
        assert.notStrictEqual(base64, "");
    });

    it('should get string from api', async () => {
        let str = await getCaptchaString(base64);
        console.log('returned str ' + str);
        assert.notStrictEqual(str, "6sbps");
    });

});

