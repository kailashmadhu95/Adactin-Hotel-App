const { Given, When, Then } = require('@cucumber/cucumber');


Given('User logins with the correct credential and then provide the details', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await lo.URL()
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()
    await sh.location()
    await sh.hotels()
    await sh.roomType()
    await sh.rooms()
    await sh.checkInDate()
    await sh.checkOutDate()
    await sh.adultsPerRoom()
    await sh.childPerRoom()
    await sh.Submit()
});

When('User clicks on the Radio button to select the hotel', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await c.radioBtn()
});

Then('User clicks on the Continue button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await c.continueBtn()
});



Given('User logins with the valid credential and then provide the details', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await lo.URL()
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()
    await sh.location()
    await sh.hotels()
    await sh.roomType()
    await sh.rooms()
    await sh.checkInDate()
    await sh.checkOutDate()
    await sh.adultsPerRoom()
    await sh.childPerRoom()
    await sh.Submit()
});

When('User doesnot clicks on the Radio button to select the hotel', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
});

Then('User taps on the Continue button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await c.continueBtn()
});