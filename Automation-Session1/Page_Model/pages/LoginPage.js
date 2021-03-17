import {Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector('input[id="user-name"]')
        this.passwordField = Selector('input[id="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3')
        this.loginLogo = Selector('.login_logo')
    }

    async submitLogin(username, password) {
        await t
            .typeText(this.usernameField, username,{paste:true})
            .typeText(this.passwordField, password,{paste:true})
            .click(this.loginButton)
    }

    async noUserLogin(password){
        await t
            .typeText(this.passwordField,password,{paste:true})
            .click(this.loginButton)
    }

    async noPasswordLogin(username){
        await t
            .typeText(this.usernameField, username,{paste:true})
            .click(this.loginButton)
    }
}


export default new LoginPage()