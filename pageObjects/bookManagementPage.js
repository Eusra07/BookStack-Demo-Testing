const { expect } = require("@playwright/test");


class BookPage{

    constructor(page){

        this.page = page;
        this.bookBtn = page.getByRole('link', { name: 'Books', exact: true });
        this.bookHeading = page.locator('h1:has-text("Books")');

        this.createNewBookBtn = page.getByText('Create New Book', { exact: true });
        this.bookCreateHeading = page.getByRole('heading', { name: 'Create New Book' });
        this.bookName = page.getByLabel('Name', { exact: true });
        this.decriptionBox = page.locator("//div[contains(@class,'editor-content-area')]//p");
        this.saveBtn = page.getByRole('button', { name: 'Save Book' });
        this.successMessage = page.getByText('Book successfully created');

        this.deleteBtn = page.getByText('Delete', { exact: true });
        this.deleteHeading = page.getByRole('heading', { name: 'Delete Book' });
        this.confirmBtn = page.getByText('Confirm', { exact: true });
        this.deleteSuccessful = page.getByText('Book successfully deleted');
        
    }

    async goToBookPage(){

        await this.bookBtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.bookHeading).toBeVisible();

    }    

    async createBook(name, description){

        await this.createNewBookBtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.bookCreateHeading).toBeVisible();

        await this.bookName.click();
        await this.bookName.fill(name);

        await this.decriptionBox.click();
        await this.decriptionBox.fill(description);
        
        await this.saveBtn.click();
        await expect(this.successMessage).toBeVisible({
        timeout: 10000
        });

    }

    async deleteBook(){

        await this.deleteBtn.click();
        await expect(this.deleteHeading).toBeVisible();
        await this.confirmBtn.click();
        await expect(this.deleteSuccessful).toBeVisible();

    }
}

module.exports = {BookPage}