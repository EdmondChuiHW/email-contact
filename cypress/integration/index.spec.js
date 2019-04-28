const requestWithAddress = ({ward, address}) => {
  cy.get('input')
    .clear()
    .type(address);

  cy.contains(`Ward ${ward}`, {timeout: extendedTimeout});

  cy.get('.email-array')
    .contains(/gmail/i)
    .should('have.prop', 'href')
    .and('include', 'https://mail.google.com/mail/')
    .and('include', `Ward%20${ward}`);

  cy.get('.email-array')
    .contains(/outlook/i)
    .should('have.prop', 'href')
    .and('include', 'https://outlook.live.com/')
    .and('include', `Ward%20${ward}`);

  cy.get('.email-array')
    .contains(/yahoo/i)
    .should('have.prop', 'href')
    .and('include', 'https://compose.mail.yahoo.com/')
    .and('include', `Ward%20${ward}`);

  cy.get('.email-array')
    .contains(/mail app/i)
    .should('have.prop', 'href')
    .and('match', /^mailto:.+/)
    .and('include', `Ward%20${ward}`);

  cy.get('.email-array')
    .contains(/call/i)
    .should('have.prop', 'href')
    .and('match', /^tel:\d+/);
};

// Heroku needs time to wake up; free tier zzz
const extendedTimeout = 20 * 1000;

describe('Email contact', () => {
  it('should display mayor by default', () => {
    cy.visit('/');

    cy.contains('Mayor', {timeout: extendedTimeout});
  });

  it('should show clear button after typing', () => {
    cy.visit('/');

    cy.get('button[aria-label="Search"]');

    cy.get('input')
      .type('aaa')
      .get('[role="progressbar"]')
      .get('button[aria-label="Clear"]', {timeout: extendedTimeout})
      .click();

    cy.get('input').should('not.have.value', 'aaa', {timeout: extendedTimeout});
  });

  [
    [1, 'T5N 0G1'],
    [2, 'T5V 1J5'],
    [3, 'T5X 0B1'],
    [4, 'T5A 0E8'],
    [5, 'T5R 5N1'],
    [6, 'T5N 2R8'],
    [7, 'T5H 1L9'],
    [8, 'T6E 4Z8'],
    [8, 'T6E 2G1'],
    [9, 'T6W 1K3'],
    [10, 'T6W 1A8'],
    [11, 'T6L 6Z5'],
    [12, 'T6L 3R8'],
  ].forEach(([ward, address]) => {
    it(`returns 2019 ward ${ward} councillor given ${address}`, () => requestWithAddress({
      ward,
      address,
    }));
  });

  // todo send geo via location api
  [
    [1, 'geo: lng: -113.563056, lat: 53.536595'],
    [2, 'geo: lng: -113.604620, lat: 53.591472'],
    [3, 'geo: lng: -113.526879, lat: 53.630543'],
    [4, 'geo: lng: -113.381295, lat: 53.577589'],
    [5, 'geo: lng: -113.575081, lat: 53.509145'],
    [6, 'geo: lng: -113.567034, lat: 53.542020'],
    [7, 'geo: lng: -113.467694, lat: 53.558773'],
    [8, 'geo: lng: -113.495897, lat: 53.512991'],
    [8, 'geo: lng: -113.484919, lat: 53.519719'],
    [9, 'geo: lng: -113.521991, lat: 53.429015'],
    [10, 'geo: lng: -113.528301, lat: 53.398682'],
    [11, 'geo: lng: -113.404426, lat: 53.472449'],
    [12, 'geo: lng: -113.407412, lat: 53.466921'],
  ].forEach(([ward, address]) => {
    it(`returns 2019 ward ${ward} councillor given ${address}`, () => requestWithAddress({
      ward,
      address,
    }));
  });
});
