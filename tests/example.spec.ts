import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
require('dotenv').config()

test.use({ viewport: { width: 1700, height: 900 } });
test.describe.parallel('UX/UI', () => {

  test.beforeEach(async ({ page }) => {
              
  })

const url = 'https://www.saucedemo.com/'

test('Login bad credentials', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert any username', { page, test })
  await ai('insert any password', { page, test })
  await ai('click buton login', { page, test })
  var statusLogin = await ai('was the login succesful?', { page, test })
  console.log(statusLogin)

  expect(statusLogin).toEqual(false)

  await page.pause()

});

test('Search the most expensive article', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click buton login', { page, test })
  await ai('order product price high to low', { page, test })
  await page.pause()

  var price = await ai('get the price of the first article', { page, test })
  console.log(price)
  
  expect(price).toEqual('$ 49.99')
  await page.pause()

});

test('Purchase article', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click buton login', { page, test })
  await ai('add to the cart the 2 articles', { page, test })
  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('fill form with real information', { page, test })
  await ai('click continue button', { page, test })
  await ai('finish purchase', { page, test })

  const element = await page.locator('.checkout_complete_container')
  expect(element).toBeVisible()

  await page.pause()

});

test.only('Purshace with missing requiered fields', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click buton login', { page, test })
  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('click continue button', { page, test })

  var value = await ai('get the css locator from the error message', { page, test })
  console.log(value)

  expect(value).toEqual('H3[data-test="error"]')

  await page.pause()

});

});





