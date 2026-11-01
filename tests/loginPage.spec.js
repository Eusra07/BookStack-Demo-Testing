const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageObjects/POManager");
const dataset = require("../utils/loginData.json");
const invalidDataset = JSON.parse(JSON.stringify(require("../utils/invalidLoginData.json"))); 



test(`Verify user search working and update user status ${dataset.USERNAME}`, async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(dataset.USERNAME,dataset.PASSWORD);
    await loginPage.validLogin();
})

let tNumber = 1
for (const data of invalidDataset){
  test(`Check invalid login combination ${tNumber}`, async ({ page }) => {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goToLoginPage();
    await loginPage.login(data.USERNAME,data.PASSWORD);
    await loginPage.invalidLogin(data.USERNAME,data.PASSWORD);

  });
  tNumber++;
};