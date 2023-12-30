import React from "react"

const ExpenseList = ({ expenses }) => {
  return (
    <div className="w-full bg-[url('../assets/bg1.jpg')]  " >
      <div className="bg-white w-60 h-15 rounded-lg items-center mx-auto  ">
      <div className="">
      <h2 className="text-center font-bold text-2xl text-black">Expense List 📃</h2>
      </div>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>{expense.description}</strong> - ${expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default ExpenseList
