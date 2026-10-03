export class SignIn {
    constructor(page) {
        this.url = page
        this.newUser = page.locator('//a[text()="New User Register Here"]')
        this.uName = page.locator('#username')
        this.pass = page.locator('#password')
        this.conPass = page.locator('#re_password')
        this.fName = page.locator('[id="full_name"]')
        this.email = page.locator('[id="email_add"]')
        this.capImg = page.locator('#captcha')
        this.capText = page.locator('#captcha-form')
        this.term = page.locator('#tnc_box')
        this.reg = page.locator('[id="Submit"]')
        this.re= page.locator('#Reset')
    }

    async URL(){
        await this.url.goto("https://adactinhotelapp.com/")
    }

    async register(){
        await this.newUser.click()
    }

    async userName(user){
        await this.uName.fill(user)
    }

    async passWord(password){
        await this.pass.fill(password)
    }

    async confirmPassword(confirm){
        await this.conPass.fill(confirm)
    }

    async fullName(full){
        await this.fName.fill(full)
    }

    async emailAdd(Email){
        await this.email.fill(Email)
    }

    async captchaText(){
        await this.capText.fill()
    }

    async condition(){
        await this.term.click()
    }

    async submitBtn(){
        await this.reg.click()
    }

    async resetBtn(){
        await this.re.click()
    }

} 