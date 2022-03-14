import { currentDateTime, writefile } from "../support/helpers"
class SignUpPage {

   getEmail = () => cy.get('[name="email"]').should('be.visible').clear()
   getPassword = () => cy.get('[name="password"]').clear()
   getRepeatPassword = () => cy.get('[name="confirmPassword"]').clear()
   getSubmitButton = () => cy.get('.cta-1 > .d-flex')

   fillSignUpForm() 
   {

      this.getEmail().type('test' + currentDateTime + '@gmail.com')  //used aliases method to generate unique emails by passing current datetime to the address
      this.getPassword().type('test123')
      this.getRepeatPassword().type('test123')
      this.getSubmitButton().click()
   }

}

export default SignUpPage;