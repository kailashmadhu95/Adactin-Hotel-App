import { test } from "@playwright/test";
import { SignIn } from "../Pages/Signin";
import { xcelReader } from "../utils/excel";
import { Login } from "../Pages/login"
import { searchHotel } from "../Pages/searchHotel";
import { Confirmation } from "../Pages/hotelConfirmation";
import {data} from "../TestData/data.json"
import { booking } from "../Pages/book";

const readexcel = xcelReader()
console.log(readexcel);
for (let d of readexcel) {

    test(d.user, async ({ page }) => {

        const s = new SignIn(page)
        await s.URL()
        await s.register()
        await s.userName(d.user)
        await s.passWord(d.password)
        await s.confirmPassword(d.confirm)
        await s.fullName(d.full)
        await s.emailAdd(d.Email)
        await s.condition()
        await s.submitBtn()
    })
}

test('Verify Login Screen', async ({ page }) => {

    const s = new SignIn(page)
    const l = new Login(page)
    await s.URL()
    await l.userCredentials()
    await l.userPassword()
    await l.loginBtn()

})

test('verify the hotel search', async ({ page }) => {

    const s = new SignIn(page)
    const l = new Login(page)
    const h = new searchHotel(page)
    await s.URL()
    await l.userCredentials()
    await l.userPassword()
    await l.loginBtn()
    await h.location()
    await h.hotels()
    await h.roomType()
    await h.rooms()
    await h.checkInDate()
    await h.checkOutDate()
    await h.adultsPerRoom()
    await h.childPerRoom()
    await h.Submit()
})

test('verify the confirmation by clicking the radio button', async ({ page }) => {
    const s = new SignIn(page)
    const l = new Login(page)
    const h = new searchHotel(page)
    const c = new Confirmation(page)
    await s.URL()
    await l.userCredentials()
    await l.userPassword()
    await l.loginBtn()
    await h.location()
    await h.hotels()
    await h.roomType()
    await h.rooms()
    await h.checkInDate()
    await h.checkOutDate()
    await h.adultsPerRoom()
    await h.childPerRoom()
    await h.Submit()
    await c.radioBtn()
    await c.continueBtn()
})

test('Verify the booking details', async({page})=>{
    const s = new SignIn(page)
    const l = new Login(page)
    const h = new searchHotel(page)
    const c = new Confirmation(page)
    const b = new booking(page)
    await s.URL()
    await l.userCredentials()
    await l.userPassword()
    await l.loginBtn()
    await h.location()
    await h.hotels()
    await h.roomType()
    await h.rooms()
    await h.checkInDate()
    await h.checkOutDate()
    await h.adultsPerRoom()
    await h.childPerRoom()
    await h.Submit()
    await c.radioBtn()
    await c.continueBtn()
    await b.firstName(data.fn)
    await b.lastName(data.ln)
    await b.billAddress(data.ba)
    await b.cardNo(data.cn)
    await b.cardType()
    await b.expiryMonth()
    await b.expiryYear()
    await b.cvvNumb()
    await b.bookBtn()
    await page.waitForTimeout(3000)
    await b.logOut()
})