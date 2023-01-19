import React, {useState} from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filteredYear, addFilteredYear] = useState('2000');

  const filterDateHahdler = (selectedYear) => {
    addFilteredYear(selectedYear);
    
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} addFiltedYear={filterDateHahdler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
