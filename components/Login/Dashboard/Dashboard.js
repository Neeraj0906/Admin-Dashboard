import React, { useEffect } from 'react'
import Header from '../../CommonComponents/Header/Header'
import Sidenav from '../../CommonComponents/Sidenav/Sidenav'
import "./dashboard.css"
import Welcome from '../../CommonComponents/welcome/Welcome'
import ChartCard from '../../ChartCard/ChartCard'
import LineCharts from '../../CommonComponents/LineCharts/LineCharts'
import Histogram from '../../CommonComponents/Histogram/Histogram'
import Pie from '../../CommonComponents/Pie chart/PieC'
import PieC from '../../CommonComponents/Pie chart/PieC'

export default function Dashboard() {
  const arr = [1, 2, 3];



  return (
    <div className='dashboard-container'>
        <div className='welcome-info'>
          <Welcome/>
          <ChartCard/>
        </div> 
        <div className='line-charts'>
            {arr.map((elem) => <LineCharts elem={elem} />)}
        </div>
      <div className='more-charts'>
        <Histogram />
        <PieC/>
        </div>
      </div>
    )
}
