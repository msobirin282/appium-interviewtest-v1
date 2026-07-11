class HomePage {

    get btnLogin() {
        return $('id=com.eraspace.app.home:id/btnLogin');
    }

    get lblCheckPoint() {
        return $('id=com.eraspace.app.home:id/tvCheckPoint');
    }

    get menuPromo() {
        return $('android=new UiSelector().text("Promo")');
    }

    get menuAkun() {
        return $('android=new UiSelector().text("Akun")');
    }

    async clickLogin() {
        await this.btnLogin.waitForDisplayed();
        await this.btnLogin.click();
    }

    async verifyHomepageDisplayed() {
        await expect(this.lblCheckPoint).toBeDisplayed();
        await expect(this.menuPromo).toBeDisplayed();
        await expect(this.menuAkun).toBeDisplayed();
    }

}

module.exports = new HomePage();