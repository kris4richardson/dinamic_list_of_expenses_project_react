import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {

  const [selectedYear, addSelectedYear] = useState('');

  const selectedDateHadler = (event) =>
  {
  
   addSelectedYear(event.target.value);
  //  const selectedDate = {
  //   date: new Date(selectedDate),
  };
  


  console.log(selectedYear);
  
  // props.saveSelctedDate(selectedDate);
  // addSelectedDate('');
  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={selectedDateHadler}>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;