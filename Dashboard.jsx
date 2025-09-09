import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Dashboard() {
  const { transactions } = useContext(GlobalContext);

  // Calculate total, income, and expense
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div>
      <h3>Dashboard</h3>
      <p>Total Balance: {total}</p>
      <p>Income: {income}</p>
      <p>Expense: {expense}</p>
    </div>
  );
}

export default Dashboard;
