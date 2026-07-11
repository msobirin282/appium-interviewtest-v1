class LoginPage {

    get txtEmail() {
        return $('id=com.eraspace.app.membership:id/edtPhoneNumber');
    }

    get txtPassword() {
        return $('id=com.eraspace.app.membership:id/edtPassword');
    }

    get btnLogin() {
        return $('id=com.eraspace.app.membership:id/btnLogin');
    }

    get lblErrorMessage() {
        return $('//*[@text="Email atau No Handphone belum terdaftar"]');
    }

    async login(email, password) {

        await this.txtEmail.waitForDisplayed();

        await this.txtEmail.setValue(email);

        await this.txtPassword.setValue(password);

        await this.btnLogin.click();

    }

    async verifyLoginFailed() {
        await expect(this.lblErrorMessage).toBeDisplayed();
    }

}

module.exports = new LoginPage();