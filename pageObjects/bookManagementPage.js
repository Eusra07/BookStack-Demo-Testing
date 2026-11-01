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

        this.requiredMessage = page.getByText('The name field is required.', { exact: true });

        this.editIcon = page.getByText('Edit', { exact: true });
        this.editHeading = page.getByRole('heading', { name: 'Edit Book' });
        this.updateSuccessful = page.getByText('Book successfully updated');
        this.bookNameBox = page.locator('h1.break-text');
        
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

        if (name === '') {

            await this.saveBtn.click();
            await expect(this.requiredMessage).toBeVisible();
            return false;

        } else {

            await this.bookName.click();
            await this.bookName.fill(name);

            await this.decriptionBox.click();
            await this.decriptionBox.fill(description);
            
            await this.saveBtn.click();
            await expect(this.successMessage).toBeVisible({
            timeout: 10000
            });
            return true;
        }
    }

    async editBook(name){

        await this.editIcon.click();
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.editHeading).toBeVisible();
        
        this.updatedBook = name + ' edited';
        await this.bookName.click();
        await this.bookName.fill(this.updatedBook);
        await this.saveBtn.click();

        await expect(this.updateSuccessful).toBeVisible();
        await expect(this.bookNameBox).toHaveText(this.updatedBook);

    }

    async deleteBook(){

        await this.deleteBtn.click();
        await expect(this.deleteHeading).toBeVisible();
        await this.confirmBtn.click();
        await expect(this.deleteSuccessful).toBeVisible();

    }
}

module.exports = {BookPage}