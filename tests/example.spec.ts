import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
require('dotenv').config()

const url = 'https://www.saucedemo.com/'

test('Purchase article', async ({ page }) => {
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
  await ai('add to the cart the first 2 articles', { page, test })
  await page.pause()

  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('fill form with real information', { page, test })
  await page.pause()
  
  var statusPurchase = await ai('the purchase was successful?', { page, test })
  console.log(statusPurchase)
  expect(statusPurchase).toEqual(false)

  await page.pause()

});

test.only('Spanish login', async ({ page }) => {
  await ai('visita la pagina https://www.saucedemo.com/', { page, test })
  await ai('inserta nombre de usuario standard_user', { page, test })
  await ai('inserta contraseña secret_sauce', { page, test })
  await page.pause()

  await ai('clic en el boton login', { page, test })
  await ai('agrega 3 articulos al carrito', { page, test })
  await page.pause()

  var numArticles = await ai('cuantos elementos hay agregados al carrito?', { page, test })
  console.log(numArticles)
  expect(numArticles).toEqual('3')

});

