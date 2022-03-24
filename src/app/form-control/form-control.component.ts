import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  mathForm: any;
  output = ''
  validation = ''

  constructor() {
  }

  ngOnInit(): void {

  }

  /*calculate(n1: number, n2: number, n3: number) {
    this.output = '';
    this.validation = '';
    n1 = Math.pow(n1, 2);
    n2 = Math.pow(n2, 2);
    n3 = Math.pow(n3, 2);

    if (!isNaN(n1 && n2 && n3)) {

      if (n1 > n2 && n1 > n3) {
        this.output = "The number with largest square is Number 1 and value is= " + `${n1}`;
      } else if (n2 > n1 && n2 > n3) {
        this.output = "The number with largest square is Number 2 and value is= " + `${n2}`;
      } else if (n3 > n2 && n3 > n1) {
        this.output = "The number with largest square is Number 3 and value is= " + `${n3}`;
      } else if (n1 === n2 || n1 === n3 || n2 === n3) {
        this.validation = "The number is equal";
      }

    } else {
      this.validation = 'At least one invalid number was entered.';
    }
  }*/

  /*test(n = []) {
    n.reduce((t, v) => {
      (t * t > v * v) ? return t :  v;
    })
  }*/

  calculate(n:any){
    const arr = Object.values(n);
    //const result = arr.map((item:any) => item * item).reduce((t:any, v:any) => (t * t > v * v) ? t: v);
    const result = arr.map((item:any) => item).reduce((t:any, v:any) => (t * t > v * v) ? t: v);
    (isNaN(result)) ? console.log('At least one invalid number was entered') : console.log(`The number with the largest square is ${result}`)
  }

}
