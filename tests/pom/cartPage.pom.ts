import { Page, expect } from '@playwright/test';
import { base } from './base';
import { ai } from '@zerostep/playwright';

export class cartPage extends base {

  constructor(public readonly page: Page, public readonly test) { super(page); }


  async checkoutPurchase(){
    await ai('checkout purchase', { page: this.page, test: this.test })
  }


}
