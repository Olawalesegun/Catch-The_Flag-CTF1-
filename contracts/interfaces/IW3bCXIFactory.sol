// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

interface IW3bCXIFactory {

  function register(string memory name) external returns(address);
  
}