import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() texto!:string;
  @Input() color!:string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  buttonClick(){
    this.btnClick.emit();
  }

  ngOnInit(): void {
  }

}
