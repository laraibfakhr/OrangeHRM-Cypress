export class Directory{

CheckDirectory(){
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-container').find('.oxd-sheet').each(($el,index,$list)=>{
        //cy.wait(5000)
        var directory= $el.find('.oxd-sheet > .orangehrm-directory-card-header').text()
        
        if($el.text().includes('Linda'))
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


}
}