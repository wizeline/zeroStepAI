import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
import { loginPage } from './loginPage.pom.ts';
import { inventoryPage } from './inventoryPage.pom.ts';
import { cartPage } from './cartPage.pom.ts';
import { checkoutPage } from './checkoutPage.pom.ts';
require('dotenv').config()

test.describe.serial('Zero step IA by GPT3.5 and GPT4', () => {
  let login
  let inventory
  let cart
  let checkout

  test.beforeEach(async ({ page }) => {
    login = new loginPage(page,test)         
    inventory = new inventoryPage(page,test)         
    cart = new cartPage(page,test)         
    checkout = new checkoutPage(page,test)         
  })

test('Login bad credentials', async ({ page }) => {
  await login.gotoURL()
  await login.login(process.env.badUser, process.env.badPassword)
  await login.validateLoginsStatus()

  await page.pause()
  
});

test('Search the most expensive article ', async ({ page }) => {
  await login.gotoURL()
  await login.login(process.env.user, process.env.password)
  await inventory.validatePriceArticle()

  await page.pause()
  
});

test('Purchase article', async ({ page }) => {
  await login.gotoURL()
  await login.login(process.env.user, process.env.password)
  await inventory.addArticles()
  await inventory.goToCart()
  await cart.checkoutPurchase()
  await checkout.fillForm()
  await checkout.finishePurchase()
  await checkout.validatePurchaseStatus()

  await page.pause()
  
});

test('Purchase with missing requiered fields', async ({ page }) => {
  await login.gotoURL()
  await login.login(process.env.user, process.env.password)
  await inventory.addArticles()
  await inventory.goToCart()
  await cart.checkoutPurchase()
  await checkout.finishePurchase()
  await checkout.validateErrorMessage()

  await page.pause()
  
});

});





