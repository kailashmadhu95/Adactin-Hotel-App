const {Given, When, Then} = require('@cucumber/cucumber');


Given('User logins with the correct credentials, then provide all the details', async function () {
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

When('User enters the First Name, Last Name, Billing Address', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.firstName()
    await book.lastName()
    await book.billingAddress()
});

When('User enters the Credit Card Number, Credit Card Type, Expiry Date, CVV Number', async function () {
     lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.
    await book. 
});

Then('User clicks on the Book Now button', async function () {
    
});