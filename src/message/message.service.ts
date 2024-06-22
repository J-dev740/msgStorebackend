import { Injectable } from '@nestjs/common';
import {ethers} from  'ethers';
import * as dotenv from 'dotenv';

dotenv.config()

// const contractAddress='0x4b6A4A8c45626c1a902127Bb8574cd317FdFCda4';
const contractAddress=process.env.CONTRACT_ADDRESS;

const contractABI= [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "initialMsg",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "newMessage",
          "type": "string"
        }
      ],
      "name": "MessageUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newMsg",
          "type": "string"
        }
      ],
      "name": "setMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMessage",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
@Injectable()
export class MessageService {
    private provider: ethers.JsonRpcProvider;
    private signer: ethers.Signer;
    private contract:ethers.Contract;

    constructor(){
        this.provider= new ethers.InfuraProvider('sepolia',process.env.INFURA_PROJECT_ID)
        this.signer=  new ethers.Wallet(process.env.PRIVATE_KEY,this.provider)
        this.contract= new ethers.Contract(contractAddress,contractABI,this.signer);

    }
    async getMessage():Promise<string>{
        const result= await this.contract.getMessage();
        return result;
    }
    async setMessage(newMessage:string):Promise<void>{
        const tx= await this.contract.setMessage(newMessage);
        await tx.wait();
    }
}
