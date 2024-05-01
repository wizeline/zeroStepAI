import { Page, expect } from '@playwright/test';
import { base } from './base';
import { ai } from '@zerostep/playwright';

export class inventoryPage extends base {

  constructor(public readonly page: Page, public readonly test) { super(page); }


  async validatePriceArticle(){
    await ai('order product by Price high to low', { page: this.page, test: this.test })
    var price = await ai('get the price of the first article', { page: this.page, test: this.test })
    console.log(price)
  
    expect(price).toEqual('$ 49.99')
  }

  async addArticles(){
    await ai('add to the cart the 2 articles', { page: this.page, test: this.test })

  }

  async goToCart(){
    await ai('go to te cart', { page: this.page, test: this.test })

  }


}