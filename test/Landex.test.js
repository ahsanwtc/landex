const Landex = artifacts.require('Landex');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Landex', () => {
  let landex = undefined;

  beforeEach(async () => {
    // landex = await Landex.deployed();
    landex = await Landex.new('uri for metadata');
  });

  it('deployed', async () => {
    const name = await landex.name();
    const symbol = await landex.symbol();
    const uri = await landex.uri(1);
    expect(symbol === 'LEX');
    expect(name === 'Landex');
    expect(uri === 'uri for metadata1');
  });
});
