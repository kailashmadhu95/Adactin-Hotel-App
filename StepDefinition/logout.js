const {Given, When, Then} = require ('@cucumber/cucumber');

Given('User logins with the correct credential',async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
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
    await c.radioBtn()
    await c.continueBtn()
    await book.firstName()
    await book.lastName()
    await book.billingAddress()
    await book.incrtCardNo()
    await book.cardType()
    await book.expiryMonth()
    await book.cvvNumb()
    await book.bookBtn()
});

When('User clicks on the Logout button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.logOut()
});

Then('User is redirected to the login page', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    await lo.URL()

});