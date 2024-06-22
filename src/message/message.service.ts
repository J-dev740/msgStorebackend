import { Injectable } from '@nestjs/common';
import {ethers} from  'ethers';

const contractAddress='0x4b6A4A8c45626c1a902127Bb8574cd317FdFCda4';
const contractABI=[
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
          "internalType": "string",
          "name": "initialMsg",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
    }
  ]
@Injectable()
export class MessageService {}
