import React from 'react';
// import moment from "moment";
import './App.css';
import TrainingHistory from "./components/TrainingHistory"

function App() {
  // const date = moment("21.09.20", "DD.MM.YY");
  // const date1 = moment("21.07.20", "DD.MM.YY");
  // const date2 = moment("21.08.20", "DD.MM.YY");
  // const dates = [date, date1, date2]
  // moment.locale("ru")
  // console.log(date._i)
  // console.log(dates.sort((a, b) => a._d-b._d))
  return (
    <div className="App">
      <div className="container">
        <TrainingHistory></TrainingHistory>
      </div>
    </div>
  );
}

export default App;
