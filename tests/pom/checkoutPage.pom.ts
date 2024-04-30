import { Page, expect } from '@playwright/test';
import { base } from './base';
import { ai } from '@zerostep/playwright';

export class checkoutPage extends base {

  constructor(public readonly page: Page, public readonly test) { super(page); }


  async fillForm(){
    await ai('fill form with real information', { page: this.page, test: this.test })
    await ai('click continue button', { page: this.page, test: this.test })
  }

  async finishePurchase(){
    await ai('finish purchase', { page: this.page, test: this.test })

  }

  async validatePurchaseStatus(){
    var statusPurchase = await ai('was succesful the purchase?', { page: this.page, test: this.test })
    console.log(statusPurchase)

    expect(statusPurchase).toEqual(true)
  }

  async validateErrorMessage(){
    var value = await ai('get the css locator from the error message', { page: this.page, test: this.test  })
    console.log(value)
    expect(value).toContain('error')
  }

}
