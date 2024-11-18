# **SendETH DApp**

## **Overview**
SendETH is a decentralized application (DApp) that allows users to connect their Ethereum wallet (e.g., MetaMask) to send ETH, view their account balance, and seamlessly interact with the Ethereum blockchain. This project demonstrates how to use `ethers.js` for blockchain interaction, enabling secure transactions directly from a web interface.

## **Table of Contents**
- [**SendETH DApp**](#sendeth-dapp)
  - [**Overview**](#overview)
  - [**Table of Contents**](#table-of-contents)
  - [**Features**](#features)
  - [**Live Demo**](#live-demo)
  - [**Technologies Used**](#technologies-used)
  - [**Installation**](#installation)
    - [**1. Clone the Repository**](#1-clone-the-repository)
    - [**2. Install Dependencies**](#2-install-dependencies)
    - [**3. Start the Application**](#3-start-the-application)
    - [**4. Install MetaMask**](#4-install-metamask)
  - [**How to Use**](#how-to-use)
  - [**Project Structure**](#project-structure)
    - [**Key Files**](#key-files)
  - [**License**](#license)
  - [**Acknowledgments**](#acknowledgments)

## **Features**
- Connect to an Ethereum wallet using MetaMask.
- View the connected account's ETH balance.
- Send ETH to another Ethereum address.
- Display transaction status with user-friendly feedback.

## **Live Demo**
Check out the live demo here: [**SendETH DApp**](https://your-live-demo-link.com)

## **Technologies Used**
- **React**: Front-end framework for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **ethers.js**: A library for interacting with the Ethereum blockchain.
- **MetaMask**: A browser extension for managing Ethereum wallets.

## **Installation**

To run this project locally, follow these steps:

### **1. Clone the Repository**
```bash
git clone https://github.com/Elizabethcodes44/MY-DAPP.git
cd MY-DAPP
```

### **2. Install Dependencies**
Make sure you have Node.js installed, then run:
```bash
npm install
```

### **3. Start the Application**
```bash
npm run dev
```

The application will start, and you can view it at [http://localhost:5173](http://localhost:5173).

### **4. Install MetaMask**
If you haven't already, [install MetaMask](https://metamask.io/) on your browser and set up a wallet.

## **How to Use**
1. **Open the DApp** in your browser.
2. **Connect your MetaMask wallet** by clicking the "Connect Wallet" button.
3. **View your ETH balance** displayed on the screen.
4. **Send ETH**:
   - Enter the recipient's Ethereum address.
   - Enter the amount of ETH you want to send.
   - Click "Send ETH" to initiate the transaction.
5. **Transaction Status**: Wait for confirmation, and the status will be displayed.

## **Project Structure**
```
MY-DAPP/
├── public/
├── src/
│   ├── components/
│   │   ├── Wallet.jsx
│   │   ├── SendETH.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

### **Key Files**
- **Wallet.jsx**: Handles wallet connection and balance display.
- **SendETH.jsx**: Manages sending ETH to another address.
- **App.jsx**: Main application entry point.
- **index.css**: Styling for the application.

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## **Acknowledgments**
- [MetaMask](https://metamask.io/) for providing a robust Ethereum wallet.
- [ethers.js](https://docs.ethers.io/v5/) for blockchain interactions.
- [Vite](https://vitejs.dev/) for a fast and modern build tool.

---

