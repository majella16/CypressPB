class Header{

    aboutUsLink = '.col-xl-6 > [href="/about"]'
    helpLink = '.col-xl-6 > [href="/faqs"]'
    newsLink = '.col-xl-6 > [href="/news"]'
    signUpButton = '.col-xl-3.d-none > .button--teal'

    clickOnAboutUs() {
        return cy.get(this.aboutUsLink).click()
    }
    clickHelp() {
        return cy.get(this.helpLink).click()
    }
    clickNews() {
        return cy.get(this.newsLink).click()
    }

    clickOnSignUp() {
        return cy.get(this.signUpButton).click()
    }
}
export default Header;
