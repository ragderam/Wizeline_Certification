import {Selector, t } from 'testcafe'

class FinishPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
    }

}
export default new FinishPage()