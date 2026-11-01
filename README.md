# BookStack Demo Testing Project

## Project Overview

This project focuses on testing the BookStack Demo application to verify its functionality and identify potential defects. It covers functional testing of different modules, including Login, Book management(crud operation), and book search feature.

The project includes manual test cases, bug reports, and automated test scenarios. Playwright with JavaScript is used for UI test automation, following the Page Object Model (POM) design pattern. Following the POM pattern makes the project reusable, manageable, and easy to understand.

## Tech Stack
* JavaScript
* Playwright
* Node.js
* npm
* Git
* GitHub

## Installation

1. Install Node.js
   Download and install Node.js from its official website: https://nodejs.org/en/download
   
   To check the Node.js version, open CMD and write:
   
   `node --version`
   
   To check the npm version, write:
   
   `npm --version`

3. Clone the Git repository

   Clone the repository to your local machine:

   `git clone <repository-url>`

4. Install project dependencies

   Navigate to the project directory and run:

   `npm install`

5. Install Playwright (if not already installed)

   `npm install -D @playwright/test`

6. Install Playwright browsers

   `npx playwright install`

## Steps

* Clone the Git repository.
* Install all dependencies.
* Open the project in your preferred code editor.
* Check the application URL and test configuration.
* Run the test cases using the commands below.

## Running Test Commands

1. Run All Tests

* To run all test scenarios: `npx playwright test`
* To see the browser while tests execute: `npx playwright test --headed`

2. Run Individual Test Files

* Login Tests:  `npx playwright test tests/loginPage.spec.js`
* Book Tests: `npx playwright test tests/bookManagementPage.spec.js`
* Search Book Tests: `npx playwright test tests/searchBook.spec.js`

3. Run Individual Files in Headed Mode

* Login Tests: `npx playwright test tests/loginPage.spec.js --headed`
* Book Tests: `npx playwright test tests/bookManagementPage.spec.js --headed`
* Search Book Tests: `npx playwright test tests/searchBook.spec.js --headed`

4. Debug Tests
To debug a specific test file, use:
`npx playwright test tests/<spec-file-name> --debug`

# Project Structure

```text
project/
│
├── pageObjects/
│   ├── POMManager.js
│   ├── bookManagementPage.js
│   ├── loginPage.js
│   └── searchBook.js
│
├── tests/
│   ├── bookManagementPage.spec.js
│   ├── loginPage.spec.js
│   └── searchBook.spec.js
│
├── utils/
│   ├── bookData.json
│   ├── invalidLoginData.json
│   └── loginData.json
│
├── .env
├── .gitignore
├── Bug Report.pdf
├── Test Cases.xlsx
├── automation_test_scripts.pdf
├── bug.mp4
├── bug2.png
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Test Documentation & Bug Reports

The repository also includes manual testing documentation and supporting bug evidence.

- **Test Cases.xlsx:** Contains manually designed test cases.
- **Bug Report.pdf:** Documents identified defects.
- **automation_test_scripts.pdf:** Contains automation test scripts.
- **bug.mp4 / bug2.png:** Video and screenshot evidence of identified bugs.


