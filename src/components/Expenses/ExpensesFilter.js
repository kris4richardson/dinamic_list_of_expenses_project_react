import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [selectedYear, addSelectedYear] = useState('2000');


  const selectedDateHadler = (event) =>
  {
  props.addFiltedYear(event.target.value);
   addSelectedYear(event.target.value);
   console.log(event.target.value);
   console.log(selectedYear);
  };
  




  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <label>{selectedYear}</label>
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