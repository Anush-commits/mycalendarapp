import React from 'react';
import './App.css';
import CalendarTable from './Components/CalendarTable';
import DataHelper from './DataHelper/DataHelper';

function App() {
  return (
    <div className="App">
    <CalendarTable/>
    <DataHelper/>
    </div>
  );
}

export default App;
