import  { useState } from 'react';
import { ethers } from 'ethers';

function Wallet() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // Connect to MetaMask wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        const userBalance = await provider.getBalance(userAddress);
  
        setAccount(userAddress);
        setBalance(ethers.formatEther(userBalance));
        setIsConnected(true);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  // Send ETH function
  const sendETH = async () => {
    if (!recipient || !amount) {
      alert('Please enter a recipient address and amount.');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });

      await tx.wait();
      alert('Transaction successful!');
    } catch (err) {
      console.error('Error sending ETH:', err);
      alert('Transaction failed.');
    }
  };

  return (
    <div className="wallet-container">
      {!isConnected ? (
        <button onClick={connectWallet} className="connect-button">
          Connect Wallet
        </button>
      ) : (
        <div className="wallet-info">
          <p><strong>Connected Account:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} ETH</p>

          <div className="send-form">
            <input
              type="text"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount in ETH"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={sendETH} className="send-button">
              Send ETH
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
