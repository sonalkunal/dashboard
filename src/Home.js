import React, { Component } from "react";
import PieChart from 'react-minimal-pie-chart';
 
class Home extends Component {
  render() {
    return (
      <div class="divpie">
        <h2>Pie Chart</h2>
         <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' , label:true},
              { title: 'Two', value: 15, color: '#C13C37' , label:true},
              { title: 'Three', value: 20, color: '#6A2135', label:true },
            ]}
             label
              labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif'
              }}
              radius={42}
              labelPosition={112}
          />
      </div>
    );
  }
}
 
export default Home;