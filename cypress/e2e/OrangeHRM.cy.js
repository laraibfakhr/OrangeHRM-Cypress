//const { beforeEach } = require("mocha")
//import { it } from 'mocha'
import {LoginPage} from './POM/LoginPage'


const loginpage = new LoginPage()



it('Verify Login',()=>{
   
    loginpage.LoginFooter()
    loginpage.ForgotPassword()
    cy.go('back')
    cy.go('back')
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    
    
})



