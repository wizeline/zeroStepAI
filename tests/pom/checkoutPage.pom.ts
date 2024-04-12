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

  async validateSuccessMessage(){
    const element = await this.page.locator('.checkout_complete_container')
    expect(element).toBeVisible()
  }

  async validateErrorMessageForm(){
    var value = await ai('get the css locator from the error message', { page: this.page, test: this.test  })
    console.log(value)
    const element = await this.page.locator(value)
    expect(element).toBeVisible()
  }

}
