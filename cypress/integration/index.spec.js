describe('Email contact', () => {
  it('should display mayor by default', () => {
    cy.visit('/');

    cy.contains('Mayor', {timeout: 10 * 1000});  // Heroku needs time to wake up; free tier zzz
  });

  it('should show clear button after typing', () => {
    cy.visit('/');

    cy.get('button[aria-label="Search"]');

    cy.get('input')
      .type('aaa')
      .get('[role="progressbar"]')
      .get('button[aria-label="Clear"]')
      .click();

    cy.get('input').should('not.have.value', 'aaa');
  });

  it('should show ward 8 given t6e 2g1', () => {
    cy.visit('/');

    cy.get('button[aria-label="Search"]');

    cy.get('input')
      .type('t6e 2g1');

    cy.contains('Ward 8');
  });
});
