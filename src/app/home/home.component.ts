import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent {
  public name = 'Tỉnh';
  public age = 15;
  public traiCay = ['Táo','Nho','Cam','Quyt'];

  public ngOnInit(): void{
    console.log('trai cay = ', this.traiCay)
  }
}
