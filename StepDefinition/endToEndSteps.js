const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { data } = require('../TestData/data.json');
const { SignIn } = require('../Pages/signIn');
const { Login } = require('../Pages/login');
const { searchHotel } = require('../Pages/searchHotel');
const { Confirmation } = require('../Pages/hotelConfirmation');
const { booking } = require('../Pages/book');


let lo; // for signIn page object
let l;  // for login page object
let sh; // for searchHotel page object
let conf; // for confirmation page object
let book; // for book page object

Given('User navigate to the login screen', async function () {

    lo = new SignIn(this.page)
    await lo.URL()
});

When('User clicks on the New User Register Here', async function () {

    lo = new SignIn(this.page)
    await lo.register()
});

When('User enters the username', async function () {

    lo = new SignIn(this.page)
    await lo.userName(data.user)
});

When('User enter the password and confirm password', async function () {
    lo = new SignIn(this.page)
    await lo.passWord(data.password)
    await lo.confirmPassword(data.confirm)
});

When('User enter full name', async function () {

    lo = new SignIn(this.page)
    await lo.fullName(data.full)
});

When('User enter the email address', async function () {
    lo = new SignIn(this.page)
    await lo.emailAdd(data.Email)
});

When('User the clicks on the Terms\\/Condition', async function () {
    lo = new SignIn(this.page)
    await lo.condition()
});

Then('User clicks on the Register button', async function () {
    lo = new SignIn(this.page)
    await lo.submitBtn()
});




Given('User navigate to the login page', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await lo.URL()
    await l.userCredentials(data.un)

});

When('User enters the password', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.userPassword(data.up)
});

Then('User click on Login button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    await l.loginBtn()
});




Given('User logins with the valid credential', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await lo.URL()
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()

});

When('User selects the Location, Hotels, Room Type, Number of rooms', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page) 
    await sh.location()
    await sh.hotels()
    await sh.roomType()
    await sh.rooms()
});

When('User enters the Check-In and Check-Out dates', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.checkInDate()
    await sh.checkOutDate()
});

When('User select the Adult per room and Children per room', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.adultsPerRoom()
    await sh.childPerRoom()
});

Then('User clicks on the Search button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.Submit()
});



Given('User login with the valid credential and then provide the details', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
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
    conf = new Confirmation(this.page)
    await conf.radioBtn()
});

Then('User clicks on the Continue button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    await conf.continueBtn()
});



Given('User can login with the valid username and password, then provide the detail',{timeout: 60 * 1000
}, async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
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
    await conf.radioBtn()
    await conf.continueBtn()
});

When('User enters the First Name, Last Name, Billing Address', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
    await book.firstName(data.fn)
    await book.lastName(data.ln)
    await book.billAddress(data.ba)
});

When('User enters the Credit Card Number, Credit Card Type, Expiry Date, CVV Number', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
    await book.creditCardNumber(data.cn)
    await book.creditCardType() 
    await book.expiryMonth()
    await book.cvvNumb(data.cvv)
});

Then('User clicks on the Book Now button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
    await book.bookBtn()
});



Given('user Login with the valid set of data',{timeout: 60 * 1000
}, async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
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
    await conf.radioBtn()
    await conf.continueBtn()
    await book.firstName(data.fn)
    await book.lastName(data.ln)
    await book.billAddress(data.ba)
    await book.creditCardNumber(data.cn)
    await book.creditCardType() 
    await book.expiryMonth()
    await book.cvvNumb(data.cvv)
    await book.bookBtn()
});

When('User clicks on the Logout button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    conf = new Confirmation(this.page)
    book = new booking(this.page)
    await book.logOut()
});