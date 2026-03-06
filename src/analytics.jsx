import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

function Analytics({ tasks }) {

  const completed = tasks.filter(t=>t.completed).length;
  const pending = tasks.length - completed;

  const data = {
    labels:["Completed","Pending"],
    datasets:[
      {
        data:[completed,pending],
        backgroundColor:["#4caf50","#ff9800"]
      }
    ]
  };

  return(

    <div>

      <h2>Task Progress</h2>

      <div style={{width:"350px"}}>
        <Pie data={data}/>
      </div>

      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>

    </div>

  );
}

export default Analytics;