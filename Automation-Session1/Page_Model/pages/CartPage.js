import {Selector, t } from 'testcafe'
import ProductPage from '../pages/ProductPage'
import CheckoutPage from '../pages/CheckoutPage'


class CartPage{
    constructor(){
        this.checkoutbutton = Selector('.checkout_button')
        this.cartList = Selector('.cart_list')
        this.item1 = Selector('.cart_list .cart_item:nth-child(3) .inventory_item_name')
        this.item2 = Selector('.cart_list .cart_item:nth-child(4) .inventory_item_name')
        this.item3 = Selector('.cart_list .cart_item:nth-child(5) .inventory_item_name')
        this.item4 = Selector('.cart_list .cart_item:nth-child(6) .inventory_item_name')
        this.item5 = Selector('.cart_list .cart_item:nth-child(7) .inventory_item_name')
        this.item6 = Selector('.cart_list .cart_item:nth-child(8) .inventory_item_name')
    }
    async cartValidation(backpack,bikeLight,boltTShirt,redTShirt,labsOnesie,fleeceJacket){

        await t
        .expect(this.item1.innerText).eql(await backpack)
        .expect(this.item2.innerText).eql(await bikeLight)
        .expect(this.item3.innerText).eql(await boltTShirt)
        .expect(this.item4.innerText).eql(await redTShirt)
        .expect(this.item5.innerText).eql(await labsOnesie)
        .expect(this.item6.innerText).eql(await fleeceJacket)
    }

    async clickCheckout(){
        await t
        .click(this.checkoutbutton)
        .expect(CheckoutPage.pageTitle.innerText).eql('Checkout: Your Information')

    }
}

export default new CartPage()