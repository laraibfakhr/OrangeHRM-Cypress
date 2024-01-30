//const { beforeEach } = require("mocha")
//import { it } from 'mocha'
import { LoginPage } from './POM/LoginPage'
import { AddUser } from './POM/AddUser'
import { Directory } from './POM/Directory'
import { Search } from './POM/SearchBar'

const loginpage = new LoginPage() //name of the class
const adduser = new AddUser() //name of the class
const directory = new Directory() //name of the class
const search = new Search()

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
    adduser.JobDropdown()
    adduser.MoreDropdown()
})

it('Verify the child Directory user',()=>{
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    directory.CheckDirectory()
})

it.only('Verify the Search Bar',()=>{
    loginpage.Username('Admin')
    loginpage.Password('admin123')
    loginpage.LoginButton()
    search.Searchbar()

})
