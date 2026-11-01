const { LoginPage } = require("./loginPage");
const { BookPage } = require("./bookManagementPage");
const { SearchPage } = require("./searchBook");

class POManager{

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.bookPage = new BookPage(this.page);
        this.searchPage = new SearchPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getBookPage(){
        return this.bookPage;
    }

    getSearchPage(){
        return this.searchPage;
    }
    
}

module.exports = {POManager};

