import { Component, OnInit, OnDestroy } from '@angular/core';
import {PropertiesService} from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {


  properties = [];

  propertiesSubscription : Subscription;

  constructor(
    private propertiesSerivce : PropertiesService
  ) { }

  ngOnInit(): void {
    this.propertiesSubscription = this.propertiesSerivce.propertiesSubject.subscribe(
      (data: any)=>{
        this.properties = data;
      }
    );
    this.propertiesSerivce.emitProperties();


  }


  getSoldeValue(index){
    if(this.properties[index].sold){
      return 'red';
    }else{
      return 'green'
    }
  }

  ngOnDestroy(){
    this.propertiesSubscription.unsubscribe;  // desabonnement de l'observable
  }
}
