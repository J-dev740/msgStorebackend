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
  ];
@Injectable()
export class MessageService {
    private provider: ethers.JsonRpcProvider;
    private signer: ethers.Signer;
    private contract:ethers.Contract;

    constructor(){
        this.provider= new ethers.InfuraProvider('sepolia','00173c97e60d44ba80bdb4291ce2bf45')
        this.signer=  new ethers.Wallet('adc627587063d15a2ea7e979d3b85c7fea2a0b08c3c6737302c4d28fa8b30a80',this.provider)
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
