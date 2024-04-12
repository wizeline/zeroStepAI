import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
require('dotenv').config()

const url = 'https://www.saucedemo.com/'

test('Login bad credentials', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert any username', { page, test })
  await ai('insert any password', { page, test })
  await ai('click buton login', { page, test })
  var message = await ai('get the value from the error message', { page, test })
  console.log(message)

  expect(message).toContain('not match')

  await page.pause()

});

test('Search the most expensive article ', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click buton login', { page, test })
  await ai('order product by low to high', { page, test })
  await ai('click in the most expensive article', { page, test })
  var price = await ai('get value of the price', { page, test })
  console.log(price)
  
  expect(price).toEqual('$ 49.99')

  await page.pause()

});

test('Purshace article', async ({ page }) => {
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

  const element = await page.locator(value)
  expect(element).toBeVisible()

  await page.pause()

});





