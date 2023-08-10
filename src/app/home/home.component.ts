import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent {
  public name = 'Tỉnh';
  public age = 15;

  public resetName(): void{
    console.log('resetName');
    this.name ='';
  }
}
