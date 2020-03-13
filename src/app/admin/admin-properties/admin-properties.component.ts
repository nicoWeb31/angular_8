import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {


  propertiesForm : FormGroup;
  propertiesSubscription : Subscription;
  properties:any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private propertiesService: PropertiesService
  ) { }

  ngOnInit(): void {
    this.initPropertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data) => {
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
  }



  onSubmitPropertiesForm(){
    const newProterty = this.propertiesForm.value;
    this.propertiesService.createProperties(newProterty);
    console.log(this.properties);
  }

  initPropertiesForm(){

    this.propertiesForm = this.formBuilder.group({
      tiltle : ['',Validators.required],       //rendre obligatoir des champs
      categories : '',
      surface : ['',Validators.required],
      nbrePiece:['',Validators.required],
      description:'',
      prix:['',Validators.required]


    });

  }

}
