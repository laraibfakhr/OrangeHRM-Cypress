export class LoginPage{

    //call different functions

    Username(usernamelogin){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(usernamelogin)
    }

    Password(passwordlogin){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passwordlogin)
    }

    LoginButton(){
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    }

    LoginFooter(){
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains('OrangeHRM OS 5.5')
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').contains('© 2005 - 2023')
    }
    
    ForgotPassword(){
        cy.get('.orangehrm-login-forgot > .oxd-text')
        .contains('Forgot your password?')
        .click()
        cy.get('.oxd-text--h6').contains('Reset Password')
        cy.get('.orangehrm-card-note > .oxd-text').contains('Please enter your username to identify your account to reset your password')

        cy.get('.oxd-input').type('Admin')
        cy.get('.oxd-button--secondary').click()

        cy.get('.oxd-text--h6').contains('Reset Password link sent successfully')
    }
}