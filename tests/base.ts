import {Page, expect} from '@playwright/test';


export class base {

  constructor(public readonly page: Page) { }

async pause(){
  await this.page.pause()
}

async waitSeconds(waitSeconds=3){
  await this.page.waitForTimeout(1000 * waitSeconds)

}

async waitLoadAll(){
  await this.page.waitForLoadState('networkidle')
  await this.page.waitForLoadState('domcontentloaded')

}


}
