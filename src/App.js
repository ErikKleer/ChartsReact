import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts'
import _ from 'lodash';
import './App.css';

const App = () => {
  const [ chartData, setChartData ] = useState([]);

  const loadData = (data) => {
    const values = _.groupBy(data, (value) => value.manufacturer);
    console.log("Raw data", values);

    const result = _.map(values, (value, key) => [ key, _.sumBy(values[key], (v) => v.sales)]);
    console.log("Formatted data", result);

    return [["Manufacturer", "Sales"], ...result]
  }

  useEffect(() => {
    const data = [
      { manufacturer: "Ford", model: "Ka", sales: 3 },
      { manufacturer: "Ford", model: "Fiesta", sales: 10 },
      { manufacturer: "Ford", model: "Focus", sales: 5 },
      { manufacturer: "Ford", model: "Mustang", sales: 1 },
      { manufacturer: "Honda", model: "Civic", sales: 10 },
      { manufacturer: "Honda", model: "Fit", sales: 50 },
      { manufacturer: "Toyota", model: "Corola", sales: 70 },
      { manufacturer: "Toyota", model: "Etios", sales: 20 },
      { manufacturer: "Volks", model: "Gol", sales: 100 },
    ];

    setChartData(loadData(data));
  }, []);

  return (
    <div className="App">
      <h1 className='title'>React Charts</h1>
      <Chart chartType='PieChart' data={chartData} width={"100%"} height={"400px"} />
    </div>
  );
}

export default App;
