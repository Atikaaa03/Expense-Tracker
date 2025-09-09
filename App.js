import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <TransactionForm />
      <TransactionList />
      <Dashboard />
    </div>
  );
}

export default App;