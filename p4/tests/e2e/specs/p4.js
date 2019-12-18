// https://docs.cypress.io/api/introduction/api.html

describe('P4', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('p', 'Home of recipes')
  })

  let recipe = {
    name: 'Cranberry Stuffed Turkey Breasts'
  }

  it('shows all the recipes', () => {
    cy.visit('/recipes')

    cy.contains('h2','Recipes')

    cy.contains('[data-test="recipe-name"]',recipe.name)

    cy.get('[data-test="recipe-name"]').should('have.length',3)

    cy.get('[data-test="recipe-name"]').first().click();

    cy.contains('[data-test="recipe-name"]',recipe.name)
  })

  it('interacts with favorite',() => {
    
    cy.visit('/recipe/1');

    cy.get('[data-test="add_to_fav_button"]').click();

    cy.contains('[data-test="fav-count"]',1);

    cy.visit('/favorite');

    cy.contains('[data-test="fav-contents"]',recipe.name);

    cy.get('[data-test="remove-button"]').click();

    cy.contains('[data-test="fav-count"]',0);

    cy.contains("No items");

  })

  it('shows contact us form', () =>{

    cy.visit('/contactus');

    cy.contains('Contact US');
  })
})
