//1. Setup Your Test File:
import { test, expect } from '@playwright/test';
import { LoginPage } from './login-page';
import { InventoryPage } from './inventory-page';
import { CartPage } from './cart-page';

test('should sort products and add an item to the cart', async ({ page }) => {
  const Login = new LoginPage(page);
  const Inventory = new InventoryPage(page);
  const Cart = new CartPage(page);


  await test.step('Open SauceDemo page', async () => {
    await LoginPage.goto();
    await LoginPage.login();
});

  await test.step('Inventory and Sort', async () => {
    await InventoryPage.goto();
    await InventoryPage.inventory() 
}); 

  await test.step('Navigate to and Verify the Cart', async () => {
    await CartPage.cart() 
}); 
}); 
