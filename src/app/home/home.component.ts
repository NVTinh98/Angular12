import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent {
  public name = 'LÊ VĂN ĐỨC';
  public age = 15;
  public traiCay = ['Táo','Nho','Cam','Quyt'];
  public traiCay2=[
    {ten: 'Tao', gia: 12, haGia: '20%'},
    {ten: 'Nho', gia: 10, haGia: '10%'},
    {ten: 'Cam', gia: -5, haGia: 0},
    {ten: 'Quýt', gia: 5, haGia: '30%'},
  ];

  public ngOnInit(): void{
    console.log('trai cay = ', this.traiCay)
    console.log('trai cay = ', this.traiCay2)
  }
}
