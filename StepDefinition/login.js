const {Given, When, Then} = require('@cucumber/cucumber');

Given('User nget enters  into the login page', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await lo.URL()
});

When('User fills the uname', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await lo.URL()
    await l.userCredentials(data.un)
});

When('User fills the pswd', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword(data.up)
});

Then('User just hit on the  Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});



Given('User navigates to the login page', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await lo.URL()
});

When('User fills the valid userName', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userCredentials(data.un)
});

When('User fills the incorrect Passwd', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword(data.incorrect_up)
});

Then('User clicks on the Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});


Given('User enters to the login page', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await lo.URL()
});

When('User fill the incorrect username', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userCredentials(data.incorrect_un)
});

When('User fill the valid Password', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword(data.up)
});

Then('User taps Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});


Given('User navigate to login page', async function () {
    lo = new SignIn(this.page)
    await lo.URL()
});

When('User leaves uName blank', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userCredentials('')
});

When('User leaves pswd blank', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword('')
});

Then('User click Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});


Given('User navg to the Login page', async function () {
    lo = new SignIn(this.page)
    await lo.URL()
});

When('User left the userName blank', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userCredentials('')
});

When('User enter valid Passwd', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword(data.up)
});

Then('User hits the Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});



Given('User moves towards the Login page', async function () {
    lo = new SignIn(this.page)
    await lo.URL()
});

When('User enters the correct userName', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userCredentials(data.un)
});

When('User leave Passwd blank', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword('')
});

Then('User taps on the Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});