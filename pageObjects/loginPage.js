const { expect } = require("@playwright/test");


class LoginPage{

    constructor(page){
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Email' })
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.profileDropdown = page.getByRole('button', { name: 'Profile Menu' });
        this.logoutButton = page.getByText('Logout', { exact: true });
        
        this.emailCred = page.getByText('The email field is required.', { exact: true });
        this.passwordCred = page.getByText('The password field is required.', { exact: true });
        this.invalidCred = page.getByText('These credentials do not match our records.', { exact: true });
    }

    async goToLoginPage(){

        //await this.page.waitForTimeout(2000);

        await this.page.goto(process.env.BASE_URL, {
            waitUntil: 'domcontentloaded',
            timeout: 50000
        });
            await this.userName.waitFor({
        state: 'visible',
        timeout: 30000
        });

    }

    async login(username, password){
        await this.userName.clear();
        await this.password.clear();

        await expect(this.userName).toHaveValue('');
        await expect(this.password).toHaveValue('');

        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async invalidLogin(username, password) {

        if (username === '' && password === '') {
            await expect(this.emailCred).toBeVisible();
            await expect(this.passwordCred).toBeVisible();
        } 
        else if (username === '') {
            await expect(this.emailCred).toBeVisible();
        } 
        else if (password === '') {
            await expect(this.passwordCred).toBeVisible();
        } 
        else {
            await expect(this.invalidCred).toBeVisible();
        }
    }

    async validLogin(){
        await this.profileDropdown.click();
        await expect(this.logoutButton).toBeVisible();
    }
}

module.exports = {LoginPage}