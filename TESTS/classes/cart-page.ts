import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly inventory_item: Locator;
  readonly shopping_cart_badge: Locator;
  readonly item5_title_link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventory_item = page.locator('.inventory_item');
    this.shopping_cart_badge = page.locator('.shopping_cart_badge');
    this.item5_title_link = page.locator('[data-test="item-5-title-link"]')
  }

  async cart() {
    await this.shopping_cart_badge.click();
    await expect (this.shopping_cart_badge).toHaveText('1');

    await expect (this.page).toHaveURL('https://www.saucedemo.com/cart.html');

    await expect (this.item5_title_link).toHaveText('Sauce Labs Fleece Jacket');
  }
}