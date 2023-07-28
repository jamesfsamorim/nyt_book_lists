describe('Home Page', () => {
  const appUrl = 'http://localhost:3000/' 
  const header = '[data-testid="header"]' 
  const bookList = '[data-testid="book-list"]' 
  const filters = '[data-testid="filters"]' 
  const previousDateFilter = '[data-testid="previousDateFilter"]' 
  const fictionSelect = '[data-testid="fiction-select"]' 
  const footer = '[data-testid="footer"]' 
  
  it('should fetch and display book lists', () => {
    cy.visit(appUrl);

    cy.wait(2000);
    cy.get(bookList).should('have.length.greaterThan', 0);

    cy.get(header).should('be.visible');
    cy.get(filters).should('be.visible');
    cy.get(footer).should('be.visible');
  });

  it('should filter book lists by genre', () => {
    cy.visit(appUrl);

    cy.wait(2000);

    cy.get(fictionSelect).parent().click().get('ul > li[data-value="hardcover-fiction"]').click();

    cy.wait(2000);

    cy.get(bookList).should('have.length.greaterThan', 0);

    cy.get(header).should('be.visible');
    cy.get(filters).should('be.visible');
    cy.get(footer).should('be.visible');
  });

  it('should filter book lists by published date', () => {
    cy.visit(appUrl);

    cy.wait(2000);

    cy.get(previousDateFilter).click();

    cy.wait(2000);

    cy.get(bookList).should('have.length.greaterThan', 0);

    cy.get(header).should('be.visible');
    cy.get(filters).should('be.visible');
    cy.get(footer).should('be.visible');
  });
});
