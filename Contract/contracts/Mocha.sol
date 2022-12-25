// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Mocha {


    string private name;

    constructor() {
        name = "Sina";
    }

    function getName() public view returns (string memory) {
        return name;
    }
}