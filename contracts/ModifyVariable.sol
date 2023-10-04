//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
  string public x;

  constructor(string memory _x) {
    x = _x;
  }

  function modifyToLeet() public {
    x = "gotcha!";
  }

}