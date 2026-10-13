class searchHotel {
    constructor(page) {
        this.loc = page.locator('#location')
        this.hot = page.locator('#hotels')
        this.type = page.locator('#room_type')
        this.noOfRoom = page.locator('#room_nos')
        this.checkIn = page.locator('#datepick_in')
        this.checkOut = page.locator('#datepick_out')
        this.adultRoom = page.locator('#adult_room')
        this.childRoom = page.locator('#child_room')
        this.find = page.locator('#Submit')
    }
    async location () {
        await this.loc.selectOption({value:'Melbourne'})
    }
    async hotels () {
        await this.hot.selectOption({value:'Hotel Sunshine'})
    }
    async roomType () {
        await this.type.selectOption({value:"Double"})
    }
    async rooms () {
        await this.noOfRoom.selectOption({value:"6"})
    }
    async CRTcheckInDate (correct_checkIN_date) {
        await this.checkIn.fill(correct_checkIN_date)
    }
    async CRTcheckOutDate (correct_checkOUT_date) {
        await this.checkOut.fill(correct_checkOUT_date)
    }
    async InCRTcheckInDate (incorrect_checkIN_date) {
        await this.checkIn.fill(incorrect_checkIN_date)
    } 
    async InCRTcheckOutDate (incorrect_checkOUT_date) {
        await this.checkOut.fill(incorrect_checkOUT_date)
    }
    async adultsPerRoom () {
        await this.adultRoom.selectOption({value:"2"})
    }
    async childPerRoom () {
        await this.childRoom.selectOption({value:"1"})
    }  
    async Submit () {
        await this.find.click()
    }  

}
module.exports = { searchHotel }