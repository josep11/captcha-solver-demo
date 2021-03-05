# captcha-solver-demo

This project demonstrates how to use anti-captcha.com API to solve captchas

## Sign Up for a free trial and get the api key

(http://anti-captcha.com/)

## Install

```bash
npm i
echo "export ANTI_CAPTCHA_API_KEY='your-api-key'" >> ~/.bash_profile  # set env variable globally
source ~/.bash_profile
```

## Test

```bash
npm test
```
Or, in case you don't want to set a global environment variable:

```bash
ANTI_CAPTCHA_API_KEY='your-api-key' npm test
```
