const { Given, When, Then } = require('@cucumber/cucumber');

Given('User nav to the login screen', async function () {
    lo = new SignIn(this.page)
    await lo.URL()
});


When('User clicks on the New User Register here', async function () {
    lo = new SignIn(this.page)
    await lo.register()
});

When('User fills the username', async function () {
    lo = new SignIn(this.page)
    await lo.fullName(data.full)
});

When('User fills the password and confirm password', async function () {
    lo = new SignIn(this.page)
    await lo.emailAdd(data.Email)
});

When('User enters full name', async function () {
    lo = new SignIn(this.page)
    await lo.fullName(data.full)
});

When('User enters the email address', async function () {
    lo = new SignIn(this.page)
    await lo.emailAdd(data.Email)
});

When('User the clicks Terms\\/Condition', async function () {
    lo = new SignIn(this.page)
    await lo.condition()
});

Then('User clicks the Register button', async function () {
    lo = new SignIn(this.page)
    await lo.submitBtn()
});



