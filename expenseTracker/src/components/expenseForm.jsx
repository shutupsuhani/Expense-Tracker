import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ addExpense }) => {
 const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
 });

 useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
 }, []);

 const [description, setDescription] = useState('');
 const [amount, setAmount] = useState('');
 const [date, setDate] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   

   if (!description || !amount || !date) {
     alert('Please fill all fields!');
     return;
   }

   
   const newExpense = {
     description,
     amount: parseFloat(amount),
     date,
   };

   
   addExpense(newExpense);

   
   setDescription('');
   setAmount('');
   setDate('');
 };

 return (
    <>
      <div className="w-3/4 h-7/10 shadow-md items-center m-auto  px-6 py-3 ">
        <div className=" h-3/4">
          <form className="backdrop-blur-sm bg-white/30 shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
            <h3 className="title text-center  text-white font-bold text-2xl">
              Add Expense
            </h3>

            <div className="mt-4">
              <label>Description 🛒:</label>
              <input
                type="text"
                placeholder="Description"
                className="w-full h-10 rounded-lg mt-3 border-2 border-slate-400"
                value={description} onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label>Amount 🪙:</label>
              <input
                type="number"
                placeholder="Amount"
                required={true}
                className="w-full h-10 rounded-lg mt-3 border-2 border-slate-400"
                value={amount} onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label>Date 📆:</label>
              <input
                type="date"
                className="w-full h-10 rounded-lg mt-3 border-2 border-slate-400"
                value={date} onChange={(e) => setDate(e.target.value)}
              />
            </div>
          
          <div className='mt-4 grid place-items-center '>
          <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Expense</button>
          </div>

          </form>
        </div>
      </div>
    </>
 );
};

export default ExpenseForm;