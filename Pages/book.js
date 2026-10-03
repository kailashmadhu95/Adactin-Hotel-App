export class booking {
    constructor (page){
        this.oname = page.locator('#first_name')
        this.ename = page.locator('#last_name')
        this.baddres = page.locator('#address')
        this.card = page.locator('#cc_num')
        this.ctype = page.locator('#cc_type')
        this.exmonth = page.locator('#cc_exp_month')
        this.exyear = page.locator('#cc_exp_year')
        this.cvnumb = page.locator('#cc_cvv')
        this.book = page.locator('#book_now')
        this.itineary =page.locator('#my_itinerary')
        this.signout = page.locator('[id="logout"]')

    }

    async firstName(fn){
        await this.oname.fill(fn)
    }
    async lastName(ln){
        await this.ename.fill(ln)
    }
    async billAddress(ba){
        await this.baddres.fill(ba)
    }
    async cardNo(cn){
        await this.card.fill(cn)
    }
    async cardType(){
        await this.ctype.selectOption({value:"VISA"})
    }
    async expiryMonth(){
        await this.exmonth.selectOption({value:"9"})
    }
    async expiryYear(){
        await this.exyear.selectOption({value:"2027"})
    }
    async cvvNumb(){
        await this.cvnumb.fill('124')
    }
    async bookBtn(){
        await this.book.click()
    }
    async itinearyBtn(){
        await this.itineary.click()
    }
    async logOut(){
        await this.signout.click()
    }

}