//const { beforeEach } = require("mocha")
//import { it } from 'mocha'
import {LoginPage} from './POM/LoginPage'
import { AddUser } from './POM/AddUser'


const loginpage = new LoginPage() //name of the class
const adduser = new AddUser() //name of the class

it('Verify Login',()=>{
   
    loginpage.LoginFooter() //class.function
    loginpage.ForgotPassword()
    cy.go('back')
    cy.go('back')
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    
})

it('Verify users are adding successfully',()=>{
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    cy.get(':nth-child(1) > .oxd-main-menu-item')
    .contains('Admin')
    .click()

    adduser.AddUserbutton()

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.oxd-button--ghost').click();
    cy.get(':nth-child(2) > .oxd-input').clear('e');
    cy.get(':nth-child(2) > .oxd-input').type('emailrandom');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get('.oxd-form-actions > .oxd-button--secondary').click();
    cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click();
    cy.get('.oxd-button--ghost').click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get(':nth-child(2) > .oxd-input').clear('S');
    cy.get(':nth-child(2) > .oxd-input').type('Software Engineer 2');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').click();
    cy.get('.oxd-button--secondary').click();
    /* ==== End Cypress Studio ==== */
})

