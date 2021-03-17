import {CREDENTIALS} from '../data/Const'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'

fixture('Overview Test Scenarios ') 
.page `https://www.saucedemo.com/`
.beforeEach(async t =>{
    await 
        LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
})
test('Final order items Overview Validation', async t=> {
  
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
    await 
        CheckoutPage.navigateOverview(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.LAST,CREDENTIALS.MAIL_INFORMATION.POSTAL)
    await
        OverviewPage.overviewValidation(backpack,bikeLight,boltTShirt,redTShirt,labsOnesie,fleeceJacket)
})
test('Complete a purchase', async t=> {
    
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
    await 
        CheckoutPage.navigateOverview(CREDENTIALS.MAIL_INFORMATION.FIRST, CREDENTIALS.MAIL_INFORMATION.LAST,CREDENTIALS.MAIL_INFORMATION.POSTAL)
    await 
        OverviewPage.overviewValidation(backpack,bikeLight,boltTShirt,redTShirt,labsOnesie,fleeceJacket)
    await 
        OverviewPage.clickFinish()
})