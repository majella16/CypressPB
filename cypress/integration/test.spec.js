/// <reference types="cypress" />
import Header from "../pageObjects/header"
import NewsPage from "../pageObjects/newsPage"
import SignUpPage from "../pageObjects/signUpPage"
import { currentDate, currentTime, writefile } from "../support/helpers"

const header = new Header()
const newsPage = new NewsPage()
const signup = new SignUpPage()

context('The PrimaryBid header', () => {
  before(() => {
    cy.clearLocalStorage()
    writefile('\nTest run started ' + currentTime)
    const baseURL = Cypress.config("baseUrl")
    //Visit the website calling the url from cypress.json
    cy.visit(baseURL, {
      auth: {
        username: Cypress.env('credentials').username,
        password: Cypress.env('credentials').password
      }
    })

    writefile('\nNavigation to the website successful at ' + currentTime)

  })


  after(() => {
    cy.log('Test run completed')
    writefile('\nTest run completed at' + currentTime)
    cy.clearCookies()

  })

  //Test to check About us link
  describe('About us link', () => {
    //Test to check Navigation to the About us page
    it('Navigates to the About us page and checks the about us Page', () => {
      header.clickOnAboutUs().title('contains', 'about')
      cy.get('[data-testid=about-about-title]').invoke('text').should('contain', 'About Us')
    })
  })
  //Test to check Help link
  describe('Help link', () => {
    //Test to check Navigation to the Help page
    it('Navigates to the Help page and checks the FAQ', () => {
      header.clickHelp().title('contains', 'faqs')
      cy.get('.header--faq__content > .row').invoke('text').should('contain', 'What would you like to know?')
    })
  })
  //Test to check News link
  describe('News link', () => {
    //Test to check Navigation to the News page
    it('Navigates to the News page', () => {
      header.clickNews().title('contains', 'news')
    })
    //Test to check the news items are present in Featured content
    it('The news page contains the Featured content', () => {
      newsPage.getFeaturedContentHeader().should('contain', 'Featured Content')
      newsPage.getFeaturedContentNewsBlock().should('exist')
    })
    //Test to check the news items are present in All content
    it('The news page contains the All content', () => {
      newsPage.getAllContentHeader().should('contain', 'All Content')
      newsPage.getAllContentNewsBlock().should('exist')
    })
    //Test to check its sortable by Webinar
    it('The All content is sortable by webinar', () => {
      newsPage.setfilterContent()
      newsPage.getallContentnewsgrid().should('not.contain.text', 'Media Coverage')
      newsPage.getallContentnewsgrid().should('not.contain.text', 'Press Release')
      newsPage.getallContentnewsgrid().should('not.contain.text', 'Whitepaper')
      newsPage.getallContentnewsgrid().should('include.text', 'Webinar')
    })

  })

  //Test for Sign up
  describe('Sign up', () => {
    //test to navigate to sign up form
    it('Navigate to the Sign up page', () => {
      header.clickOnSignUp().title('contains', 'signup')
    })
    //form validation for email and password
    it('Validate sign up form', () => {
      signup.getEmail().type('invalidemail')
      signup.getPassword().type('test123')
      signup.getRepeatPassword().type('rest123')
      signup.getSubmitButton().click()
      cy.get('form > :nth-child(6)').invoke('text').should('contain', 'Passwords do not match')
      cy.get('form > :nth-child(3)').invoke('text').should('contain', 'The email you have entered is not valid')

    })

    //form submittion 
    it('Happy Path Scenario - fill sign up form', () => {
      cy.reload()
      header.clickOnSignUp()
      signup.fillSignUpForm()   //note: form after sumittion goes to personal details step1
      cy.get('img').click()
      cy.get('.text-right.col-xl-3 > .button--outline-teal').click()
      cy.url().should('include', '/user/profile')

    })

  })


})






