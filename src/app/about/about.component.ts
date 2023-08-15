import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public loginName = 'admin';
  public counter = 0;

  constructor(private common: CommonService) {}

  ngOnInit(): void{
    this.counter=this.common.counter;
  }
}
