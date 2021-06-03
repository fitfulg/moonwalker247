import React, { useEffect, useRef } from 'react';
import Chartjs from 'chartjs';

const HistoryChart = () => {
    const chartRef = useRef()

    useEffect(() => {
     if (chartRef && chartRef.current) {
        const chartInstance = new Chartjs() 
     } 
    })
    return (
        <div>
          <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>  
        </div>
    )
}

export default HistoryChart
