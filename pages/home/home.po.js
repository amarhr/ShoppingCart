var helper = require('../../helper'),
    faker = require('faker');

var HomePage = function() {

    //random generates from 'faker' library
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();

    //title and texts of notifications/error messages
    this.pageTitle = 'Etsy.com | Shop for anything from creative people everywhere';
    this.passwordExistText = 'Password was incorrect.';
    this.passwordBlankText = "Can't be blank.";

    //sign in form elements selected by id
    this.signInButton = element(by.id('sign-in'));
    // this.singInLoginForm = element(by.id('signin-button'));
    this.singInLoginForm = element(by.xpath("//button[contains(@value,'sign-in')]"));
    this.usernameField = element(by.id('join_neu_email_field'));
    this.userPasswordField = element(by.id('join_neu_password_field'));
    this.passwordExistingError = element(by.id('aria-join_neu_password_field-error'));
    this.usernameExistingError = element(by.id('aria-join_neu_email_field-error'));
    this.registerTab = element(by.id('register'));

    //register form elements
    this.registerButtonOnMainPage = element(by.id('register'));
    this.firstNameField = element(by.id('join_neu_first_name_field'));
    this.lastNameField = element(by.id('last-name'));
    this.emailField = element(by.id('join_neu_email_field'));
    this.passwordField = element(by.id('join_neu_password_field'));
    this.passwordConfirmField = element(by.id('password-repeat'));
    this.usernameRegisterField = element(by.id('username'));
    this.etsyFinds = element(by.id('etsy_finds'));
    this.registerButtonRegisterPopUp = element(by.xpath("//div[contains(@class,'overlay-mask overlay-content-wrapper')]//div[@id='join-neu-overlay']//div[contains(@class,'overlay-view overlay-small mt-xs-0 mt-md-4 mb-xs-0 mb-md-4')]//div[contains(@class,'overlay-body')]//div[contains(@class,'col-group col-flush')]//div[contains(@class,'col-xs-12')]//div[@id='join-neu-content']//div//form[@id='join-neu-form']//div[contains(@class,'col-group col-flush')]//div[contains(@class,'col-xs-12')]//div//button[contains(@value,'register')][contains(text(),'Register')]"));

    //functions to interact with our page
    this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButtonOnMainPage)
        this.registerButtonOnMainPage.click()
    }

    this.goToRegisterTab = function() {
        helper.waitElementToBeClickable(this.registerTab)
        this.registerTab.click()
    }

    this.goToLogin = function() {
        helper.waitUntilReady(this.signInButton)
        this.signInButton.click()
    }

    this.doRegister = function() {
        helper.waitUntilReady(this.firstNameField)
        this.firstNameField.sendKeys(randomFirstName)
        // this.lastNameField.sendKeys(randomLastName)
        this.emailField.sendKeys(randomEmail)
        this.passwordField.sendKeys(randomPassword)
        // this.passwordConfirmField.sendKeys(randomPassword)
        // this.usernameRegisterField.sendKeys(randomUsername)
        // helper.waitUntilReady(this.etsyFinds)
        this.registerButtonRegisterPopUp.click()
    }
}

module.exports = HomePage;
