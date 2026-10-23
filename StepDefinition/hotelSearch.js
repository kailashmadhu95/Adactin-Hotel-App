const {Given, When, Then} = require("@cucumber/cucumber");
const { booking } = require("../Pages/book");

Given('User logins with the correct credential', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    book = new booking(this.page)
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()
});

When('User selects the Locations, Hotels, Room Types, Number of room', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page) 
    await sh.location()
    await sh.hotels()
    await sh.roomType()
    await sh.rooms()
});

When('User enters the Check-In date and Check-Out date',async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.checkInDate()
    await sh.checkOutDate()
});

When('User select the Adult and Children per room', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.adultsPerRoom()
    await sh.childPerRoom()
});

Then('User clicks on the search button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.Submit()
});



Given('User logins with the valid credential', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    book = new booking(this.page)
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()
});

When('User selects the locations, hotels, number of room and doesnot select the room type', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page) 
    await sh.location()
    await sh.hotels()
    await sh.rooms()
});

When('User fills the Check-In date and Check-Out date', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.checkInDate()
    await sh.checkOutDate()
});

When('User selects the adult and children per rooms', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.adultsPerRoom()
    await sh.childPerRoom()
});

Then('User hits on the search', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.Submit()
});



Given('User login with the correct credentials', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
     book = new booking(this.page)
    await l.userCredentials(data.un)
    await l.userPassword(data.up)
    await l.loginBtn()
});

When('User selects the locations, hotels, room types, number of rooms', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page) 
    await sh.location()
    await sh.hotels()
    await sh.roomType()
    await sh.rooms()
});

When('User enter the previous dates in the Check-In and Check-Out date field', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.InCRTcheckInDate(data.incorrect_checkIN_date)
    await sh.InCRTcheckOutDate(data.incorrect_checkOUT_date)
});

When('User selects the Adult and Children per room', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.adultsPerRoom()
    await sh.childPerRoom()
});

Then('User hits on the search button', async function () {
    lo = new SignIn(this.page)
    l = new Login(this.page)
    sh = new searchHotel(this.page)
    await sh.Submit()
});
