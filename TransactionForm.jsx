import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useContext(GlobalContext); // Access global addTransaction function

  const [text, setText] = useState("");       // Description
  const [amount, setAmount] = useState("");   // Amount

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return; // Prevent empty submission

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000), // Random unique ID
      text,
      amount: +amount, // Convert string to number
    };

    addTransaction(newTransaction); // Add transaction to global state
    setText("");      // Reset form
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
