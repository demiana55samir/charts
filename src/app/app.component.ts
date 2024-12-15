import { Component } from '@angular/core';
import { ChartComponent } from './view/chart/chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyChartComponent } from "./view/my-chart/my-chart.component";
import { MyDonutsComponent } from "./view/my-donuts/my-donuts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChartComponent,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    // MyChartComponent,
    MyDonutsComponent,
    MyChartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'charts';
}
