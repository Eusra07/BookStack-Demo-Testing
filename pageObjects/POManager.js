const { LoginPage } = require("./loginPage");
const { BookPage } = require("./bookManagementPage");

class POManager{

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.bookPage = new BookPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getBookPage(){
        return this.bookPage;
    }
    
}

module.exports = {POManager};

