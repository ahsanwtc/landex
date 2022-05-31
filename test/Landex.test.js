const Landex = artifacts.require('Landex');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Landex', accounts => {
  let landex = undefined;
  const [admin, user] = accounts;

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

  it('mints a new token', async () => {
    const idBefore = await landex.getCurrenttokenId();
    await landex.mint(user);
    const idAfter = await landex.getCurrenttokenId();

    expect(idBefore.toNumber() === 0);
    expect(idAfter.toNumber() === 1);
  });
});
