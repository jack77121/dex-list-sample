describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
    cy.contains(100);
    cy.scrollTo('bottom');
    cy.contains('Okcoin' || 'BitMart');
    cy.scrollTo('bottom');
    cy.contains('Sushiswap');
    cy.scrollTo('bottom');
    cy.contains('Crodex');
    cy.scrollTo('bottom');
    cy.contains('Sushiswap Celo');
    cy.scrollTo('bottom');
    cy.contains('ZigZag');
    cy.scrollTo('bottom');
    cy.contains('1BCH');
    cy.scrollTo('bottom');
    cy.contains('Polkaswap');
    cy.scrollTo('bottom');
    cy.contains('Polkaswap');
    cy.scrollTo('bottom');
  });

  it('successfully open', () => {
    cy.contains('Binance').click();
  });

  it('successfully loads', () => {
    cy.visit('/exchange/okex');
    cy.contains('2013');
    cy.contains('Home');
  });
});
