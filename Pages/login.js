const { expect } = require('@playwright/test')

class Login {
    constructor(page) {
        this.userName = page.locator('#username')
        this.password = page.locator('#password')
        this.login = page.locator('#login')
    }

    async userCredentials(un){
        await this.userName.fill(un)
    }

    async userPassword(up){
        await this.password.fill(up)
    }

    async loginBtn(){
        await this.login.click()
    }

    async verifyLogin(){
        await expect(this.page.locator('//div[@class="auth_error"]/b[text()="Invalid Login details or Your Password might have expired. "]')).toHaveText('Invalid Login details or Your Password might have expired.')
    }
}
module.exports = { Login }