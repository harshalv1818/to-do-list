import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const DonutChart = (props) => {

    

      const data = {
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Completed',
            'Uncompleted',
            
        ],

        datasets: [{
            data: [`${props.tasksDone}`, `${props.tasksNotDone}`],
            backgroundColor: [
                'rgb(102, 255, 102)',
                'rgb(102, 102, 255)',
                
                
              ],
              borderColor: [
                'rgb(102, 255, 110)',
                'rgb(102, 102, 235)',
                
                
              ],
              borderWidth: 1,
        }]
    
        
        
        
        
      }
  
      
  return (
    <>
        <Doughnut data= {data}/>
    </>
  )
}

export default DonutChart
