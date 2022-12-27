import React from "react";
import { useState, useEffect } from "react";
//import axios from 'axios';
//import SOCResponse from "./SOCResponse.json";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  ChartjsPluginStacked100
);

const options = {
  type: "bar",
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
       stacked: true,
      grid: {
        display: false,
      },
      //beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
    tooltip: {
      enabled: true
    },
    stacked100: {
      enable: true
    }
   /* tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }

          //ensures that allData exists, and that the current bar's data (index) is contained within it
          if (context?.dataset?.allData?.length > context.dataIndex) {
            label += context.dataset.allData[context.dataIndex];
          }
          console.log("context", context);
          return label;
        },
      },
    },*/
  },
};

const App = () =>{
  const [data, setData] = useState({
    labels: ['M1'],
  datasets: [
        {
        label: '00:00 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:01 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:02 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:03 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:04 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:05 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:06 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:07 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:08 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:09 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:10 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:11 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:12 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:13 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:14 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:15 AM',
        data: [],
        borderWidth: 1,
        backgroundColor: 'red'
      },
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8003/soc_profile'
      const labelSet = [];
      const dataSet1 = [];
      const allData = [];
       await fetch(url).then((data)=> {
          console.log("Api data", data)
         const res = data.json();
         return res
       }).then((res) => {
     // const res = data.soc_profile;

      for (const val of res) {
        labelSet.push(val.vehicel_model);
        dataSet1.push([
          Math.max(...val.soc_profile),
          Math.min(...val.soc_profile),
        ]);
        allData.push(val.soc_profile);
      }
  console.log('alldata',allData);

      setData({
        labels: labelSet,
        datasets: [
          {
            data: dataSet1,
            allData: allData,
            borderWidth: 1,
            backgroundColor: 'green',
            borderColor: 'black'
          },
        ],
      });

      //  }).catch(e => {
      //         console.log("error", e)
      //     })
    });
  }

    fetchData();
  }, [])

   return (
    <div>
      {console.log("finaldata", data)}
      <Bar data={data} options={options} />
      {console.log("graph data", data)}
    </div>
    )
};

export default App;
