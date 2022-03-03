import React from 'react';
import {Chart, ArcElement} from 'chart.js'
import {Pie, Doughnut, PolarArea} from 'react-chartjs-2';

Chart.register(ArcElement);

const state = {
    labels: ['January', 'February', 'March',
             'April'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#757575', /* Autunno */
          '#5CF0FF', /* Inverno */
          '#FFD011', /* Estate */
          '#2C9452' /* Primavera */
        ],
        hoverBackgroundColor: [
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [59, 80, 81, 56]
      }
    ]
  }
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [16, 7, 3, 14],
      backgroundColor: [
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
class MyChart extends React.Component {

    render(){
        return <>
        <Doughnut className='my-4 mx-5'
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </>
    }
    
}

export default MyChart;