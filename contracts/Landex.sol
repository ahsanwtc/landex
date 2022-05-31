// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Landex is ERC1155 {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address public admin;
  string public name;
  string public symbol;

  constructor(string memory _uri) ERC1155(_uri) {
    name = "Landex";
    symbol = "LEX";
    admin = msg.sender;
  }

  /**
   * For starters, we will set the amount to 1 to keep things simple
   *
   */
  function mint(address _to) public {
    _tokenIds.increment();
    uint256 _amount = 1;
    uint256 _id = _tokenIds.current();
    bytes memory _data = '';
    _mint(_to, _id, _amount, _data);
  }

  function getCurrenttokenId() public view returns(uint256) {
    return _tokenIds.current();
  }
  
}
