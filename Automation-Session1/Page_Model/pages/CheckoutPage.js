import {Selector, t } from 'testcafe'
import OverviePage from '../pages/OverviewPage'


class CheckoutPage{
    
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.firstnameField = Selector('input[id="first-name"]')
        this.lastnameField = Selector('input[id="last-name"]')
        this.postalcodeField = Selector('input[id="postal-code"]')
        this.continueButton = Selector('.btn_primary')
        this.errorMessage = Selector('h3')
    }

    async noFirstNameInput(lastname, postalcode) {
        await t
            .typeText(this.lastnameField, lastname,{paste:true})
            .typeText(this.postalcodeField, postalcode,{paste:true})
            .click(this.continueButton)
            .expect(this.errorMessage.innerText).eql('Error: First Name is required')
    }

    async noLastNameInput(firstname, postalcode) {
        await t
            .typeText(this.firstnameField, firstname,{paste:true})
            .typeText(this.postalcodeField, postalcode,{paste:true})
            .click(this.continueButton)
            .expect(this.errorMessage.innerText).eql('Error: Last Name is required')
    }

    async noPostalcodeInput(firstname, lastname) {
        await t
            .typeText(this.firstnameField, firstname,{paste:true})
            .typeText(this.lastnameField, lastname,{paste:true})
            .click(this.continueButton)
            .expect(this.errorMessage.innerText).eql('Error: Postal Code is required')
    }

    async navigateOverview(firstname, lastname,postalcode) {
        await t
            .typeText(this.firstnameField, firstname,{paste:true})
            .typeText(this.lastnameField, lastname,{paste:true})
            .typeText(this.postalcodeField,postalcode,{paste:true})
            .click(this.continueButton)
            .expect(OverviePage.pageTitle.innerText).eql('Checkout: Overview')
    }
}

export default new CheckoutPage()