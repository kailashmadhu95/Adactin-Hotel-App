export class Confirmation {
    constructor(page) {
        this.button = page.locator('#radiobutton_0')
        this.continue = page.locator('#continue')
    }

    async radioBtn (){
        await this.button.click()
    }

    async continueBtn(){
        await this.continue.click()
    }
}