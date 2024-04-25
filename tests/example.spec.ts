import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'
require('dotenv').config()

const url = 'https://www.saucedemo.com/'

test.only('Purshace article', async ({ page }) => {
  await ai('go to this page https://www.saucedemo.com/', { page, test })
  await ai('insert username as standard_user', { page, test })
  await ai('insert password as secret_sauce in the password field', { page, test })
  await ai('click buton login', { page, test })
  await ai('add to the cart the 2 articles', { page, test })
  await page.pause()

  await ai('go to te cart', { page, test })
  await ai('checkout purchase', { page, test })
  await ai('fill form with real information', { page, test })
  await page.pause()
  
  await ai('click continue button', { page, test })
  await ai('finish purchase', { page, test })
  const element = await page.locator('.checkout_complete_container')
  expect(element).toBeVisible()

  await page.pause()

});


