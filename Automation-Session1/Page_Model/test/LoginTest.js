import {CREDENTIALS} from '../data/Const'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'

fixture('Login Test Scenarios ') 
.page `https://www.saucedemo.com/`


test('Login with valid user, standard_user ', async t=> {
    await t 
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(ProductPage.pageTitle.exists).ok()
})

test('Login with invalid user, locked_out_user ', async t=> {
    
    await t 
        LoginPage.submitLogin(CREDENTIALS.LOCKED_USER.USERNAME, CREDENTIALS.LOCKED_USER.PASSWORD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        
    await t
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Sorry, this user has been locked out.')

})

test('Login with invalid user, invalid_user ', async t=> {
    
    await t 
        LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        
    await t
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})

test('Login with invalid user, no_user ', async t=> {
    
    await t 
        LoginPage.noUserLogin(CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        
    await t
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username is required')

})

test('Login with invalid user, no_password ', async t=> {
    
    await t 
        LoginPage.noPasswordLogin(CREDENTIALS.STANDARD_USER.USERNAME)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        
    await t
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Password is required')
})

test('Logout from Product Page, standard_user ', async t=> {
    
    await t 
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
        ProductPage.logoutProduct()
    await t    
        .expect(LoginPage.loginLogo.exists).ok()

})