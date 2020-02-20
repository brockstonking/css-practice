import React, { Component } from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      roll1: [],
      roll2: [],
      count1: [],
      count2: [],
      nums1: [],
      nums2: []
    }
  }

  componentWillMount = async () => {
    const {count1, count2} = this.state;
    await this.generateNums();
    await this.count18();
    await this.count36();
    this.setState({
      nums1: [count1[0], count1[1], count1[2], count1[3], count1[4], count1[5], count1[6], count1[7], count1[8], count1[9], count1[10], count1[11], count1[12], count1[13], count1[14]],
      nums2: [count2[0], count2[1], count2[2], count2[3], count2[4], count2[5], count2[6], count2[7], count2[8], count2[9], count2[10], count2[11], count2[12], count2[13], count2[14]]
    })
  }

  count18 = () => {
    for (let i = 3; i <= 19; i++) {
      let count = 0;
      for (let n = 0; n < this.state.roll1.length; n++) {
        if (i === this.state.roll1[n]) {
          count += 1;
        }
      }
      this.state.count1.push(count);
    }
  }

  count36 = () => {
    for (let i = 3; i <= 19; i++) {
      let count = 0;
      for (let n = 0; n < this.state.roll2.length; n++) {
        if (i === this.state.roll2[n]) {
          count += 1;
        }
      }
      this.state.count2.push(count);
    }
  }

  generateNums = () => {
    for (let i = 0; i <= 10000; i++) {
      const num1 = this.getRandom(3, 19);
      const num2 = this.getRandom(1, 7) + this.getRandom(1, 7) + this.getRandom(1, 7);
      
      this.state.roll1.push(num1);
      this.state.roll2.push(num2);
    }
  }

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render () {
    const data1 = {
      labels: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      datasets: [
        {
          label: 'Occurences',
          backgroundColor: 'rgba(61, 181, 255, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          data: this.state.nums1
        }
      ]
    }
    const data2 = {
      labels: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      datasets: [
        {
          label: 'Occurences',
          backgroundColor: 'rgba(61, 181, 255, 1)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1,
          data: this.state.nums2
        }
      ]
    }
    console.log(data1)
    return (
      <div className="App" style={{display: 'flex'}}>
        <div style={{width: '40vw', height: '200px', margin: '0 2.5vw 0 2.5vw'}}>
        <Bar 
          data={data1}
          options={{
            title: {
              display:true,
              text:'Counts/18-sided die',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div style={{width: '40vw', height: '200px', margin: '0 2.5vw 0 2.5vw'}}>
        <Bar
          data={data2}
          options={{
            title: {
              display:true,
              text:'Counts/3 6-sided dice',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
      </div>
    )
  }
}

export default App;
