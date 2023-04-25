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
    
})

it.only('Verify the child ',()=>{
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()


    // cy.get('.orangehrm-container').find('.oxd-table-body').each(($e1,index,$list)=>{
    //     const nameText = $e1.find('.oxd-table-cell oxd-padding-cell').text()
    //     if(nameText.includes('Anthony Nolan')){
    //        cy.wrap($e1).find('.oxd-icon bi-trash').click()
    //     }
    // })

    // cy.get('.orangehrm-container').find('.oxd-table').each(($e1,index,$list)=>{
    //     const nameText=$e1.find('.oxd-table-body').text()
       
    //     if(nameText.includes('2023-04-10'))
    //     {
    //         cy.wrap($e1).find('.oxd-table-cell oxd-padding-cell').click()
    //       //  cy.log(nameText)
    //     }
    // })

    cy.get('.orangehrm-container').find('.oxd-sheet').each(($el,index,$list)=>{
        //cy.wait(5000)
        var directory= $el.find('.oxd-sheet > .orangehrm-directory-card-header').text()
        
        if($el.text().includes('Linda')) //I wrote directory.include but that didnt work
        {         
            cy.wrap($el).click()
        }
    //   
    })
    cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet > .orangehrm-directory-card-header').contains('Linda Jane Anderson')

    cy.get('.orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet > .orangehrm-directory-card-subtitle').then(function(title){
        cy.log(title.text())
        //text() is the jquery method
 
    })

    
})

