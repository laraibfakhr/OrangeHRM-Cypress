//import { data } from "cypress/types/jquery"
import { faker } from '@faker-js/faker';

export class AddUser{ //AddClass is the name of the class and we will have different functions inside it
    

//Class will have multiple functions for each scenario
AddUserbutton(){
 
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click()
    cy.get('.oxd-select-dropdown > :nth-child(2)')
    .click()
    

   cy.get('.oxd-autocomplete-text-input > input' ,{defaultCommandTimeout:10000}).type('L')
   cy.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click()
   

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    .click()
    cy.contains('Enabled')
    .click()
    const emailrandom = faker.internet.email()

   cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('emailrandom()')

    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Click123@')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Click123@')

    cy.get('.oxd-button--secondary').click()
  
    cy.log('Successfully created the user and it is listed in the container')

cy.log(emailrandom)

}
JobDropdown(){
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
 //   cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu').each(($el,index,$list)=>{
      //  var job= $el.find('.oxd-dropdown-menu').text()

        if($el.text().includes('Employment Status')){
            cy.wrap($el).click()

            cy.get('.orangehrm-header-container > .oxd-text').contains('Employment Status')
        }

    })   


}
MoreDropdown(){
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu').contains('Configuration').click()
    cy.get('.oxd-dropdown-menu').contains('Social Media Authentication').click()
    cy.get('.oxd-text--h4').contains('Launching Soon')
}
}