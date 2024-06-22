// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Message Storage Contract
/// @notice This contract allows storing and retrieving a message, and only the owner can change the message.
contract MessageStorage is Ownable {
    string private message;
    // address  private admin;

    /// @notice Event emitted when the message is updated.
    /// @param newMessage The new message that is stored.
    event MessageUpdated(string newMessage);

    /// @notice Constructor sets the initial message and the owner.
    /// @param initialMessage The initial message to store in the contract.
    constructor (string memory initialMsg) Ownable(msg.sender){
        message=initialMsg;
        // admin =msg.sender;
        emit MessageUpdated(initialMsg);
    }

    /// @notice Function to get the current stored message.
    /// @return The current message.
    function getMessage() public view returns (string memory){
        return message;
    }

    /// @notice Function to set a new message. Only the owner can call this function.
    /// @param newMessage The new message to store.
    function setMessage(string memory newMsg) external onlyOwner {

        // require(msg.sender==admin,"Only admin can  set the message");
        message =newMsg;
        emit MessageUpdated(newMsg);


    }
}