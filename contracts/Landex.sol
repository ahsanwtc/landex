// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract Landex is ERC1155 {
  address public admin;
  string public name;
  string public symbol;

  constructor(string memory _uri) ERC1155(_uri) {
    name = "Landex";
    symbol = "LEX";
    admin = msg.sender;
  }

  function mint() public {
    // _mint(to, id, amount, data);
  }


}
