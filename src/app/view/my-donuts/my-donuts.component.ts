import { style } from '@angular/animations';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ApexChart, ApexFill, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';

export type DonutOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  fill:ApexFill;
  title: {
    text: string;
  };
  yaxis: ApexYAxis;
  plotOptions: {
    pie: {
      donut: {
        size: string;
        labels: {
          show: boolean;
          total: {
            show: boolean;
            label: string;
            formatter: () => string;
          };
        };
      };
    };
  };
  dataLabels: {
    enabled: boolean;
    style?: {
      colors: string[];
      fontSize: string;
      fontWeight: string;
    };
  };
};

@Component({
  selector: 'app-my-donuts',
  standalone: true,
  imports: [NgApexchartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './my-donuts.component.html',
  styleUrl: './my-donuts.component.css',
})
export class MyDonutsComponent {
  @ViewChild('chart') chart!: ElementRef;

  public donutOptions: Partial<DonutOptions>;

  constructor() {
    this.donutOptions = {
      series: [80, 25, 40, 55],
      chart: {
        type: 'donut',
        width: 350,
      },
      labels: [
        'Financial Audits',
        'Compliance Audits',
        'Operational Audits',
        'Others Audits',
      ],
      // style: {
      //   colors: ['#89CFF0', '#A9A9A9', '#1C1C2C', '#F5F5F5'],
      //   fontSize: '16px',
      //   fontWeight: 'bold',
      // },
      fill: {
        colors: ['#1C1C2C', '#A9A9A9',  '#F5F0F0','#89CFF0'],
        opacity: 0.9,
        type: 'solid',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      title: {
        text: 'Risk Rates',
      },
      yaxis: {
        reversed: true,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              total: {
                show: true,
                label: '',
                formatter: () => '',
              },
            },
          },
        },
      },
      dataLabels:{
        enabled:false
      }
    };
  }
}
