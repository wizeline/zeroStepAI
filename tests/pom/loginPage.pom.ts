import { Page, expect } from '@playwright/test';
import { base } from './base';
import { ai } from '@zerostep/playwright';

export class loginPage extends base {

  constructor(public readonly page: Page, public readonly test) { super(page); }

  async gotoURL(url = process.env.URL) {
    await ai(`go to this page ${url}`, { page: this.page, test: this.test });
  }

  async login(username, password) {
    await ai(`insert username as ${username}`, { page: this.page, test: this.test })
    await ai(`insert password as ${password}`, { page: this.page, test: this.test })
    await ai('click buton login', { page: this.page, test: this.test })
  }

  async validateErrorMessage(){
    var message = await ai('get the value from the error message', { page: this.page, test: this.test })
    console.log(message)
    expect(message).toContain('not match')
  }


}
