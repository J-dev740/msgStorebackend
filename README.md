steps to  run the server 
-> clone the repo
-> run npm install 
->->create a .env file in the root folder which contains:
    #<!-- infura id -->
    INFURA_PROJECT_ID=00173c97e60d44ba80bdb4291ce2bf45
    #<!-- private key for wallet you are using to deploy the contract -->
    PRIVATE_KEY=adc627587063d15a2ea7e979d3b85c7fea2a0b08c3c6737302c4d28fa8b30a80
    #<!-- deployed contract address -->
    CONTRACT_ADDRESS=0x53A99B3ec7F86b2F5268CE9ff34445390E540AB7

-> ```npm run  start:dev``` to start the server in development mode 
-> contract folder contains the MessageStorage.sol contract that is  deployed 


steps to deploy the contract on your own and run the server in developement mode 


->deploy the contract to sepolia testnet using remix ide 
->from the remix ide get the DEPLOYED CONTRACT ADDRESS
-> setup infura provider and get a private key from infura
->create a .env file in the root folder which contains:
    INFURA_PROJECT_ID=00173c97e60d44ba80bdb4291ce2bf45
    #<!-- private key for wallet you are using to deploy the contract -->
    PRIVATE_KEY=adc627587063d15a2ea7e979d3b85c7fea2a0b08c3c6737302c4d28fa8b30a80
    CONTRACT_ADDRESS=0x53A99B3ec7F86b2F5268CE9ff34445390E540AB7
-> after setting up  the environment variables 
-> go to root folder and run 
-> ```npm run start:dev``` which starts the server in development mode at port 3000
-> use api testing tools like postman to test the api endpoint 
      GET http://localhost:3000/api/message -> returns the msg inside the smartcontract
  and 
      POST http://localhost:3000/api/message -> let's the admin modify the message and return the status 