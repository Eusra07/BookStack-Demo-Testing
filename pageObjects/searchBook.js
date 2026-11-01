const { expect } = require("@playwright/test");


class SearchPage{

    constructor(page){
        this.page = page;
        this.title = page.locator('span:has-text("BookStack Demo")');
        this.searchBar = page.locator('#header-search-box-input');
        this.bookCards = page.locator('div.entity-list').locator('a');
    
    }

    async search(name){
        await this.title.click();
        await this.searchBar.click();
        await this.searchBar.fill(name);
        await this.searchBar.press("Enter");

        await expect(this.bookCards.filter({ hasText: new RegExp(`${name}`) }).first()).toBeVisible();
    }
}

module.exports = {SearchPage}