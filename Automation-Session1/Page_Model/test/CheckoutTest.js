import {CREDENTIALS} from '../data/Const'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CheckoutPage from '../pages/CheckoutPage'


fixture('Checkout Test Scenarios ') 
.page `https://www.saucedemo.com/`
.beforeEach(async t =>{
    await 
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
            
        var backpack = await ProductPage.backpackname.innerText
        var bikeLight = await ProductPage.bikeLightkname.innerText
        var boltTShirt = await ProductPage.boltTshirtname.innerText
        var redTShirt = await ProductPage.redTShirtname.innerText
        var labsOnesie = await ProductPage.labsOnesiename.innerText
        var fleeceJacket = await ProductPage.fleeceJacketname.innerText
    await 
        ProductPage.addMultipleItems()
    await 
        ProductPage.cartclick()
    await 
        CartPage.cartValidation(backpack,bikeLight,boltTShirt,redTShirt,labsOnesie,fleeceJacket)
    await 
        CartPage.clickCheckout()
})

test('Continue with missing mail information, without Firstname ', async t=> {
    await 
        CheckoutPage.noFirstNameInput(CREDENTIALS.MAIL_INFORMATION.LAST, CREDENTIALS.MAIL_INFORMATION.POSTAL)
})

test('Continue with missing mail information, without Lastname', async t=> {
    await 
        CheckoutPage.noLastNameInput(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.POSTAL)
})

test('Continue with missing mail information, without Postalcode', async t=> {
    await 
        CheckoutPage.noPostalcodeInput(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.LAST)
})

test('Fill users information Overview displayed', async t=> {
    await 
        CheckoutPage.navigateOverview(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.LAST,CREDENTIALS.MAIL_INFORMATION.POSTAL)
})