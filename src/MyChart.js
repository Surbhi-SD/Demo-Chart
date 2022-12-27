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

const data = {
    labels: ['M1', 'M2'],
  datasets: [
        {
        label: '00:00 AM',
        data: [99, 12],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:01 AM',
        data: [87, 25],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:02 AM',
        data: [72, 39],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:03 AM',
        data: [61, 48],
        borderWidth: 1,
        backgroundColor: 'green'
      },
      {
        label: '00:04 AM',
        data: [52, 57],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:05 AM',
        data: [43, 66],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:06 AM',
        data: [34, 75],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:07 AM',
        data: [25, 84],
        borderWidth: 1,
        backgroundColor: 'yellow'
      },
      {
        label: '00:08 AM',
        data: [18, 93],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:09 AM',
        data: [8, 13],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:10 AM',
        data: [15, 29],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:11 AM',
        data: [23, 57],
        borderWidth: 1,
        backgroundColor: 'orange'
      },
      {
        label: '00:12 AM',
        data: [39, 66],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:13 AM',
        data: [45, 72],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:14 AM',
        data: [51, 89],
        borderWidth: 1,
        backgroundColor: 'red'
      },
      {
        label: '00:15 AM',
        data: [62, 97],
        borderWidth: 1,
        backgroundColor: 'red'
      },
    ]
  }

  const MyChart = () => {
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  };

  export default MyChart;
