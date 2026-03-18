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
  const firstItem = page.locator('.inventory_item').first();
  await expect(firstItem.locator('.inventory_item_name')).toHaveText('Sauce Labs Fleece Jacket');
  await expect(firstItem.locator('.inventory_item_price')).toHaveText('$49.99');
  
  //6. Add Item to Cart:
  const jacket = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Fleece Jacket' });
  await jacket.getByRole('button', { name: 'Add to cart' }).click();

  //7. Assert Cart State:
  await expect(jacket.getByRole('button')).toHaveText('Remove');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  //8. Navigate to and Verify the Cart:
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await expect(page.locator('[data-test="item-5-title-link"]')).toHaveText('Sauce Labs Fleece Jacket');
});

