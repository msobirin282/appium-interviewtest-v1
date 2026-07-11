const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const loginData = require('../data/loginData');

describe('Login Feature', () => {

    it('TC 1.1 - Login with invalid data', async () => {

        await HomePage.clickLogin();

        await LoginPage.login(
            loginData.invalidUser.email,
            loginData.invalidUser.password
        );

        await LoginPage.verifyLoginFailed();

    });

    it('TC 1.2 - Login with valid data', async () => {

        //await HomePage.clickLogin();

        await LoginPage.login(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await HomePage.verifyHomepageDisplayed();

    });

});