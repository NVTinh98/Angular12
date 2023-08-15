import { Component } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  public name ='';
  public age ='';

  constructor(private common: CommonService){

  }

  ngOnInit(){}
  
  public submitForm():void{
    console.log('submit form: name = ' + this.name);
    //this.common.submitData(this.name)
    this.common.submitData({name: this.name, tuoi: this.age})
  }
}
