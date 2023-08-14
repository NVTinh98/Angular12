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

public districts: string[] = ['Quận Huyện'];
public vietnamData = [
  {city: 'Tỉnh Thành Phố', district:['Quận Huyện']},
  {
    city: 'Hưng Yên',
  district: [
    'Thành phố Hưng Yên',
    'Thị Xã Mỹ Hào',
    'Huyện Khoái Châu',
    'Huyện Yên Mỹ',
    'Huyện Phù Cừ',
    'Huyện Ân Thi',
    'Huyện Tiên Lữ'
  ]},
  {
    city:'Hà Nội',
    district:[
      'Quận Long Biên',
      'Quận Hai Bà Trưng',
      'Quận Cầu Tõm',
      'Quận Nam Mộ Dung',
      'Quận Bắc Tiêu Phong',
      'Quận Đức Tuần Châu',
    ]
  }

];

  public ngOnInit(): void{
    // console.log('trai cay = ', this.traiCay)
    // console.log('trai cay = ', this.traiCay2)
    // console.log('thanhpho = ', this.cities)
    console.log('vietnamData', this.vietnamData);
  }

  public changeCity(event: any){
    const city = event.target.value;
    console.log('event', city);

    if(!city){
      return;
    }

    //Cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search)
    // if(search && search.length > 0){
    //   this.districts = search[0].district;

    //Cách 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }
}
