import {CREDENTIALS} from '../data/Const'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'

fixture('Navigate to Cart Test Scenarios') 
.page `https://www.saucedemo.com/`
.beforeEach(async t =>{
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
})


test('Navigate to shopping cart, standerd_user', async t=>{

    await    ProductPage.cartclick()
    await t    
        .expect(CartPage.cartList.exists).ok()
})

test('Add a single item to the shopping cart, standard_user', async t=> {

    var backpack = await  ProductPage.backpackname.innerText    
    await 
        ProductPage.addItem()
    await 
        ProductPage.cartclick()
    await t
        .expect(CartPage.item1.innerText).eql(await backpack)  

})

test('Add multiple items to the shopping cart, standard_user', async t=>{

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
    
})
