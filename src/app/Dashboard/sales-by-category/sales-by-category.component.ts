import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Mudguards',
        'Sidepanels',
        'BackPanels',
        'Wisers',
        'Dooms',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Mudguards',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Sidepanels',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'BackPanels',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Wisers',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Dooms',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}