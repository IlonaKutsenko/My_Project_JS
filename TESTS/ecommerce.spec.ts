//1. Setup Your Test File:
import { test, expect } from '@playwright/test';
test('should sort products and add an item to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //2. Navigate and Login:
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //3. Assert Successful Login:
  await expect(page).toHaveURL(`https://www.saucedemo.com/inventory.html`);
  const title = page.locator('.title');
  await expect(title).toHaveText('Products');
  
  //4. Interact with the Product Filter:
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

  //5. Assert the Sort Order:
  await page.locator('[data-test="item-5-title-link"]').toHaveText('Sauce Labs Fleece Jacket');;
  await page.locator('[data-test="inventory-item-price"]').toHaveValue('$49.99');
  
  //6. Add Item to Cart:
  getByRole('button', { name: 'Add to cart' })
  await page.locator('[data-test="add-to-cart"]').click();

  //7. 
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')
  await page.locator('[data-test="shopping-cart-link"]')
});

