export class Login {
    constructor(page) {
        this.userName = page.locator('#username')
        this.password = page.locator('#password')
        this.login = page.locator('#login')
    }

    async userCredentials(){
        await this.userName.fill('kailash.madhu28@gmail.com')
    }

    async userPassword(){
        await this.password.fill('Kailash@12345')
    }

    async loginBtn(){
        await this.login.click()
    }
}