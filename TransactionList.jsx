import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.length === 0 && <li>No transactions yet</li>}
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text}: {transaction.amount}{" "}
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
