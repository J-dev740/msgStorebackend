// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
contract MessageStorage is Ownable {
    string private message;
    // address  private admin;
    event MessageUpdated(string newMessage);
    constructor (string memory initialMsg) Ownable(msg.sender){
        message=initialMsg;
        // admin =msg.sender;
        emit MessageUpdated(initialMsg);
    }

    function getMessage() public view returns (string memory){
        return message;
    }
    function setMessage(string memory newMsg) external onlyOwner {

        // require(msg.sender==admin,"Only admin can  set the message");
        message =newMsg;
        emit MessageUpdated(newMsg);


    }
}