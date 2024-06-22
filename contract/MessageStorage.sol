// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStorage {
    string private message;
    address  private admin;

    constructor (string memory initialMsg){
        message=initialMsg;
        admin =msg.sender;
    }

    function getMessage() public view returns (string memory){
        return message;
    }
    function setMessage(string memory newMsg) public{

        require(msg.sender==admin,"Only admin can  set the message");
        message =newMsg;
        

    }
}