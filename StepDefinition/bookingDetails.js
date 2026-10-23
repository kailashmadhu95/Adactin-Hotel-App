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
    await c.radioBtn()
    await c.continueBtn()
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
    await book.cardNo()
    await book.cardType()
    await book.expiryMonth()
    await book.cvvNumb()
});

Then('User clicks on the Book Now button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.bookBtn()
});



Given('User logins with correct credentials and then provide the details', async function () {
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
});

When('User enters the First Name',async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.firstName()
});

When('User doesnot enter the Last Name', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
});

When('User fills the Billing Address, Credit Card Number, Credit Card Type, Expiry Date, CVV Number',async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.billingAddress()
    await book.cardNo()
    await book.cardType()
    await book.expiryMonth()
    await book.cvvNumb()   
});

Then('User clicks the Book Now button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.bookBtn()
});



Given('User login with the valid credential', async function () {
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
    await book.firstName()
    await book.lastName()
    await book.billingAddress()
    await c.radioBtn()
    await c.continueBtn()
});

When('User enters the Credit Card Number with less than {string} digit', async function (int) {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.incrtCardNo()
});


When('User enters the correct Credit Card Type, Expiry Date, CVV Number', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.cardType()
    await book.expiryMonth()
    await book.cvvNumb()
});

Then('User clicks Book Now button', async function () {
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.bookBtn()
});


Given('User login with valid credential',async function () {
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
    
});

When('User fills the First Name, Last Name, Billing Address', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.firstName()
    await book.lastName()
    await book.billingAddress()
});

When('User fills the Credit Card Number, Credit Card Type', async function () {
   lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.billingAddress()
    await book.cardNo()
    await book.cardType()
    await book.cvvNumb() 
});

When('User enters the Expired date in the Expiry Date field', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    c = new Confirmation(this.page)
    book = new booking(this.page)
    await book.expMonth()
    await book.expYear()
});

When('User fills the CVV Number', async function () {
    book = new booking(this.page)
    await book.cvvNumb()
});

Then('User then taps on Book Now button', async function () {
    book = new booking(this.page)
    await book.bookBtn()
});


