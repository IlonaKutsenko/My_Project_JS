import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly sort: Locator;
  readonly inventory_item_name: Locator;
  readonly inventory_item_price: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.sort = page.locator('[data-test="product-sort-container"]');
    this.inventory_item_name = page.locator('.inventory_item_name');
    this.inventory_item_price = page.locator('.inventory_item_price');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async inventory() {
    await this.title.click();
    await expect(this.title).toHaveText('Products');

    await this.sort.click();
    await this.sort.selectOption('hilo');

    await this.inventory_item_name.click();
    await expect(this.inventory_item_name).toHaveText('Sauce Labs Fleece Jacket');

    await this.inventory_item_price.click();
    await expect(this.inventory_item_price).toHaveText('$49.99');
  }
}