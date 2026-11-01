const { test } = require("@playwright/test");
const { POManager } = require("../pageObjects/POManager");
const dataset = require("../utils/loginData.json");
const bookDataset = JSON.parse(JSON.stringify(require("../utils/bookData.json"))); 

let tNumber = 1
for (const bookData of bookDataset){
    test(`Verify Book creation is successful ${tNumber}`, async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goToLoginPage();
        await loginPage.login(dataset.USERNAME,dataset.PASSWORD);
        await loginPage.validLogin();

        const bookPage = poManager.getBookPage();
        await bookPage.goToBookPage();
        const isCreated = await bookPage.createBook(bookData.BOOK_NAME, bookData.BOOK_DESCRIPTION);
        if (isCreated) {
            await bookPage.editBook(bookData.BOOK_NAME);
        }

        if (isCreated) {
            await bookPage.deleteBook();
        }

    });
    tNumber++;
}

