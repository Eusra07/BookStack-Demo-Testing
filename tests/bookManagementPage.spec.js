const { test } = require("@playwright/test");
const { POManager } = require("../pageObjects/POManager");
const dataset = require("../utils/loginData.json");
const bookDataset = require("../utils/bookData.json");


test(`Verify Book creation is successful`, async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.USERNAME,dataset.PASSWORD);
    await loginPage.validLogin();

    const bookPage = poManager.getBookPage();
    await bookPage.goToBookPage();
    await bookPage.createBook(bookDataset.BOOK_NAME, bookDataset.BOOK_DESCRIPTION);
    await bookPage.deleteBook();

})

