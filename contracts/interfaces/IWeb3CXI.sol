// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

interface IWeb3CXI {
  function transferOwnership(address newOwner) external;
  function deposit(address receiver, uint256 donationBps) external payable;
  function rescueFunds() external;
  function drained() external view returns(bool);
  function viewDeposit(address account) external view returns(uint256);
}