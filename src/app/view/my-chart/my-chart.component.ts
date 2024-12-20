import { Component, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule, ApexChart } from 'ng-apexcharts';

export type RadialOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  colors: string[];
  title?: {
    text: string;
  };
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: string;
        };
        value: {
          fontSize: string;
        };
        total: {
          show: boolean;
          label: string;
          formatter: () => string;
        };
      };
    };
  };
};

@Component({
  selector: 'app-my-chart',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgApexchartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent {
  @ViewChild('chart') chart!: ElementRef;

  public radialOptions: Partial<RadialOptions>;

  
  constructor() {
    this.radialOptions = {
      chart: {
        type: 'radialBar',
        height: 300
      },
      series: [64, 73, 48], 
      labels: ['New', 'Recovered', 'In Progress '], 
      colors: ['#1F1F21', '#FEB011','#89CFFF'], 
    
      plotOptions: {
        radialBar: {

          dataLabels: {
            name: {
              fontSize: '5px', 
            },
            value: {
              fontSize: '10px', 
            },
            total: {
              show: true,
              label: '', 
              formatter: () => '' 
            }
          }
        }
      }
    };
  }
}
