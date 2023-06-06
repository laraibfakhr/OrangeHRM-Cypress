export class Search{

    Searchbar(){
        cy.get('.oxd-input').type('d')
        cy.get('ul.oxd-main-menu').contains('Dashboard').click()
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').contains('Time at Work')
        cy.get(':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').contains('Quick Launch')

    
    }

}