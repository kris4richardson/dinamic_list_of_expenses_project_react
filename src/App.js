import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DYMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2025, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2025, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2025, 5, 12),
  },
];

function App() {
 const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = expense => {
   
    setExpenses(prevExpenses => 
      {
        return [expense, ...prevExpenses];
      });


  }

  const addFilteredYearHandler = (year) => {
    console.log(year);
    console.log('This is in app.js');
  }
  
// return React.createElement(
//   'div',{},React.createElement('h2', {}, "Let's get started!"), React.createElement(Expenses,  {items: expenses})
// );

  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler}/>
      <Expenses items={expenses} addSelectedYear={addFilteredYearHandler}/>
    </div>
  );
}

export default App;
