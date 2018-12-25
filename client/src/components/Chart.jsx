import React from 'react';

import {Bar, Line, Pie} from 'react-chartjs-2';
class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels: ['9/20/18', '9/31/18', '10/5/18'],
        datasets:[
          {
            label: 'Weight',
            data:[
              1,
              177,
              120
            ],
            backgroundColor:[
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ]
          }
        ]
      }
    }

  }



  render() {
    return (
      <div className="chart" style={{height: 200 + "px", width: 100 + "%"}}>
         CHART COMPONENT

         <Line
          	data={this.state.chartData}
          	width={100}
          	height={50}
          	options={{
          		maintainAspectRatio: false
          	}}
        />
      </div>
    );
  }

}

export default Chart;
