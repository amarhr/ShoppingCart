var helper = require('../../helper'),
    HomePage = require('./home.po.js');

describe('Home page : ', function() {

    var homePage = new HomePage();

    beforeEach(function() {
        browser.get(browser.params.url);
        browser.driver.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    xit('should have a title', function() {
        console.log("Title: " + browser.getTitle())
        expect(browser.getTitle()).toEqual(homePage.pageTitle);
    });

    xit('should try to sign in and verify that password was incorrect', function() {
        homePage.goToLogin();
        helper.waitUntilReady(homePage.usernameField);
        homePage.usernameField.sendKeys('test@test.com');
        helper.waitUntilReady(homePage.userPasswordField);
        homePage.userPasswordField.sendKeys('password');
        homePage.singInLoginForm.click();

        homePage = new HomePage();
        helper.waitUntilReady(homePage.passwordExistingError);
        // helper.waitUntilReady(element(by.id('aria-join_neu_password_field-error')));
        expect(homePage.passwordExistingError.getText()).toBe(homePage.passwordExistText);
    });

    xit('should try to sign in and vefiry that password cant be blank', function() {
        homePage.goToLogin();
        helper.waitUntilReady(homePage.usernameField);
        homePage.usernameField.sendKeys('123@test.com');
        helper.waitUntilReady(homePage.singInLoginForm);
        homePage.singInLoginForm.click();

        homePage = new HomePage();
        helper.waitUntilReady(homePage.passwordExistingError);
        expect(homePage.passwordExistingError.getText()).toBe(homePage.passwordBlankText);
    });

    xit('should try to sign in and vefiry that email cant be blank', function() {
        homePage.goToLogin()
        helper.waitUntilReady(homePage.userPasswordField)
        homePage.userPasswordField.sendKeys('something')
        helper.waitUntilReady(homePage.singInLoginForm)
        homePage.singInLoginForm.click()
        helper.waitElementToBeVisisble(homePage.usernameExistingError)
        expect(homePage.usernameExistingError.getText()).toBe(homePage.passwordBlankText)
    });

    xit('should navigate to register tab thru login pop up and register', function() {
        homePage.goToRegisterTab()
        expect(homePage.registerButtonRegisterPopUp.isDisplayed()).toBeTruthy()
    });

    it('should register a new user', function() {
        homePage.goToRegister()
        helper.waitUntilReady(homePage.registerButtonRegisterPopUp)
        homePage.doRegister()
    });

});
