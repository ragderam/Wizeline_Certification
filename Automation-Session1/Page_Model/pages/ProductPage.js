import {Selector, t} from 'testcafe'

class ProductPage{

    constructor(){
        this.pageTitle = Selector('.product_label')
        this.menuButton = Selector('.bm-burger-button')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('.fa-shopping-cart')
        this.backpackButton = Selector('.inventory_list div.inventory_item:nth-child(1) button')
        this.bikeLightButton = Selector('.inventory_list div.inventory_item:nth-child(2) button')
        this.boltTShirtButton = Selector('.inventory_list div.inventory_item:nth-child(3) button')
        this.fleeceJacketButton = Selector('.inventory_list div.inventory_item:nth-child(4) button')
        this.labsOnesieButton = Selector('.inventory_list div.inventory_item:nth-child(5) button')
        this.redTShirtButton = Selector('.inventory_list div.inventory_item:nth-child(6) button')
        this.backpackname = Selector ('.inventory_list div.inventory_item:nth-child(1) .inventory_item_name')
        this.bikeLightkname = Selector ('.inventory_list div.inventory_item:nth-child(2) .inventory_item_name')
        this.boltTshirtname = Selector ('.inventory_list div.inventory_item:nth-child(3) .inventory_item_name')
        this.fleeceJacketname = Selector ('.inventory_list div.inventory_item:nth-child(4) .inventory_item_name')
        this.labsOnesiename = Selector ('.inventory_list div.inventory_item:nth-child(5) .inventory_item_name')
        this.redTShirtname = Selector ('.inventory_list div.inventory_item:nth-child(6) .inventory_item_name')


    }
    
    async logoutProduct() {
        await t
            .click(this.menuButton)
            .click(this.logoutButton)
    }

    async cartclick(){
        await t 
            .click(this.cartButton)
    }

    async addItem(){
        await t
            .click(this.backpackButton)
    }

    async addMultipleItems(){
        await t
            .click(this.backpackButton)
            .click(this.bikeLightButton)
            .click(this.boltTShirtButton)
            .click(this.redTShirtButton)
            .click(this.labsOnesieButton)
            .click(this.fleeceJacketButton)

    }
}

export default new ProductPage()