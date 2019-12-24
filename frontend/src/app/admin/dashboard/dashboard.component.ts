import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40 ], 
      label: 'Series A',
      backgroundColor:
        'yellowgreen',
        borderColor: 'transparent',
    },

  ];
  ngOnInit() {
  }

}
