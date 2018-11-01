import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  p{background-color: aquamarine; border: 1px solid blue; height: 30px ; padding: 10px}`]
})
export class SuccessAlertComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
