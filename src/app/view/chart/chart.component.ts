import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions:ApexPlotOptions;
  labels?: string[];
  fill:ApexFill;
  stroke:ApexStroke;
};

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  
  @ViewChild('chart') chart!: ElementRef;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        width:550
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 20, 70, 91, 100]
        },
        {
          name: 'revenue', 
          data: [150, 110, 25, 90, 75, 55, 65, 85, 160] 
        }
    ],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      stroke: {
        curve: 'smooth',
      }
  }
}
}