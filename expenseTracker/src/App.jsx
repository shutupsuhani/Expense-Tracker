import { useState,useEffect } from "react";
import Navbar from "./components/Navbar"
import ExpenseForm from "./components/expenseForm"
import ExpenseList from "./components/expenseList"


function App() {
  const [expenses, setExpenses] = useState([]);
  const [friendsCount] = useState(2);

  
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const amountOwedPerFriend = () => {
    const totalExpenses = calculateTotal();
    return (totalExpenses / friendsCount)*0.002;
  };

  return (
    <>
      <div className="bg-[url('../assets/bg1.jpg')] w-full h-20"></div>

      <div className="bg-[url('../assets/bg1.jpg')] w-full h-screen mt-0 " >
       <Navbar/>
        <ExpenseForm addExpense={addExpense}/>
        <ExpenseList expenses={expenses}/>
       
       <div className="bg-[url('../assets/bg1.jpg')] w-full h-40 grid place-content-center ">
       
       <div className=" backdrop-blur-sm bg-white/30 w-full h-40  grid place-content-center rounded-lg mt-4">
        <div id="total" className="bg-slate-300 w-3/4 h-25 rounded-lg ml-4 grid place-content-center">
          <h2 className="text-blue-800">Total Expenses:</h2>
          <p className="text-blue-800">Total Amount 🪙:</p>
          <p className="text-blue-800">${calculateTotal()}</p>
        </div>
       
        <div id="owed" className="bg-slate-200 mt-5 w-full h-25 rounded-md grid place-content-center">
          <h2 className="text-blue-900">Amount Owed by Each Friend</h2>
          <p>${amountOwedPerFriend().toFixed(2)}</p>
        </div>

        </div>

        </div>
      </div>


    </>
  )
}

export default App
