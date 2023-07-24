const { expect } = require("chai")

beforeEach(()=> {   
    cy.visit('https://www.demoblaze.com/')
  }
)

describe('UI TEST CASES', () => {
  it('verify the cases of homepage', () => {
    //Verify the url of the website
    cy.url().should('eq','https://www.demoblaze.com/')

    //Verify the page has Home in the header
    cy.get('.active > .nav-link').contains('Home')

    //Verify the page has Contact in the header
    cy.get(':nth-child(2) > .nav-link').contains('Contact')

    //Verify the page has About us in the header
    cy.get(':nth-child(3) > .nav-link').contains('About us')

    //Verify the page has Cart in the header
    cy.get(':nth-child(4) > .nav-link').contains('Cart')

    //Verify the page has Log in in the header
    cy.get('#login2').contains('Log in')

    //Verify the page has Sign up in the header
    cy.get('#signin2').contains('Sign up')

    //Verify the footer has Copyright © Product Store 2017
    cy.get('.m-0').contains('Copyright © Product Store 2017')

    //Verify the footer has the correct email written: Email: demo@blazemeter.com
    cy.get('.caption > :nth-child(4)').contains('demo@blazemeter.co')
    
    //Verify when the user clicks on the homescreen, 
    //the left side has Category heading that displays Phones, Laptops, Monitors title

    cy.get('.active > .nav-link').click()
    cy.get('#itemc.list-group-item').contains('Phones')
    cy.get('#itemc.list-group-item').contains('Laptops')
    cy.get('#itemc.list-group-item').contains('Monitors')
  
  })

  it('verify the cases of contact page', () => {
    
    cy.get(':nth-child(2) > .nav-link').click()
    //Verify the headings in the popup are displayed correctly
    cy.get('#exampleModalLabel').contains("New message")
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > .form-control-label').contains("Contact Email:")
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > .form-control-label').contains("Contact Name:")
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(3) > .form-control-label').contains("Message:")
    
    //Verify the user input in the fields on the contact popup works fine
    cy.get('#recipient-email').type("test.com")
    cy.get('#recipient-name').type("TEST QA")
    cy.get('#message-text').type("Hello Test message.")
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    //Verify the returned API status is 200
    cy.request('https://api.demoblaze.com/entries').as('demoblaze')
    cy.get('@demoblaze').its('status')
    .should('eq',200)
  })

  it.only('verify the cases of PDP', () => {
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title').contains('Samsung galaxy s6').click()

    cy.get('.name').contains('Samsung galaxy s6')
    cy.get('.col-sm-12 > .btn')
      .should('have.css', 'background-color', 'rgb(92, 184, 92)')
      .and('contains','Add to cart')

    cy.get('.col-sm-12 > .btn').click()

  })
// //it.only('Verify the cart page',()=>{
//   cy.get('#cartur', { timeout: 10000 }).click()
//   cy.get('[width="120"]', { timeout: 50000 }).contains('Pic')
//   cy.get('thead > tr > :nth-child(2)').contains('Title')
//   cy.get('thead > tr > :nth-child(3)').contains('Price')

//   cy.get('.success > :nth-child(2)', { timeout: 100000 }).contains('Samsung galaxy s6')
//   cy.get('.success > :nth-child(3)').contains('360')
//   cy.get('.col-lg-1 > .btn').click()

// //})

})