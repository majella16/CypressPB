Import folder into VS Code. 
Command to run Cypress through test runner: npx cypress open
Command to run Cypress through command line: npx cypress run --browser chrome
Install cypress and its dependencies if necessary
Test file test.spec.js under the Integration folder
The framework is created with cypress and Javascript. It uses the Page Object Model.
The URL is stored in cyress.json and password/username in cypress.env.json. Pass the password at your end before running
Cypress captures screenshots on failures. It also captures the videos when run through the terminal.
Global const are created and accessed from helpers.js under support


UX ISSUES:
On the sign form, the errors did not disappear even after a page reload
The fields upper line seems to be clipped which is noticeable on the personal details page



