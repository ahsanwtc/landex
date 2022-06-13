// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Landex is ERC1155, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  string public name;
  string public symbol;
  mapping(uint256 => string) private _uris;

  constructor() ERC1155('') {
    name = "Landex";
    symbol = "LEX";
  }

  /**
   * For starters, we will set the amount to 1 to keep things simple
   *
   */
  function mint(address _to) external onlyOwner {
    _tokenIds.increment();
    uint256 _amount = 1;
    uint256 _id = _tokenIds.current();
    bytes memory _data = '';
    _mint(_to, _id, _amount, _data);
  }

  function burn(uint256 _id, uint256 _amount) external onlyOwner {
    _burn(msg.sender, _id, _amount);
  }

  function setURI(uint256 _id, string memory _uri) external onlyOwner {
    require(bytes(_uri).length > 0, 'invalid uri');
    require(bytes(_uris[_id]).length == 0, 'cannot assign uri twice');
    
    _uris[_id] = _uri;
  }

  function getCurrenttokenId() public view returns(uint256) {
    return _tokenIds.current();
  }

  function uri(uint256 _id) public view override returns (string memory) {
    return _uris[_id];
  }
  
}
