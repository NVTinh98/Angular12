import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  // });

  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['',Validators.required],

  })

  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
     ){}

  ngOnInit(): void{}

  public onSubmit(){
    //console.log('submit form: formData: ', this.formData.value);
    this.common.submitData(this.formData.value)
  }


}
