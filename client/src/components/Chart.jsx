import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);
    debugger
    this.state = {
      loading:true,
      newData:[],
      chartData:{
        labels: props.dates,
        datasets:[
          {
            label: 'Weight',
            data: props.pounds,
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

const mapStateToProps = (state) => {
    debugger
}

export default connect(mapStateToProps, {})(Chart);
