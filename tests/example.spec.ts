import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
require('dotenv').config()

const url = 'https://www.saucedemo.com/'

test.only('Purchase article', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click button login', { page, test })
  await ai('add to the cart the 2 articles', { page, test })
  await page.pause()

  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('fill form with real information', { page, test })
  await page.pause()
  
  await ai('click continue button', { page, test })
  await ai('finish purchase', { page, test })
  var statusPurchase = await ai('the purchase was successful?', { page, test })
  console.log(statusPurchase)
  expect(statusPurchase).toEqual(true)

  await page.pause()

});

test('Purchace article not complete info', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click button login', { page, test })
  await ai('add to the cart the 2 articles', { page, test })
  await page.pause()

  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('fill form with real information', { page, test })
  await page.pause()
  
  var statusPurchase = await ai('the purchase was successful?', { page, test })
  console.log(statusPurchase)
  expect(statusPurchase).toEqual(true)

  await page.pause()

});

test('Spanish login', async ({ page }) => {
  await ai('visita la pagina https://www.saucedemo.com/', { page, test })
  await ai('inserta username standard_user', { page, test })
  await ai('inserta password secret_sauce in the password field', { page, test })
  await ai('clic en el boton login', { page, test })
  await ai('agrega dos articulos', { page, test })
  await page.pause()

});

