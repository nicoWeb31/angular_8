import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties = [
    {
      "title": 'Ma super Maison',
      "category":'Maison',
      "sold":true
    },
    {
      "title": 'Petit Appart',
      "category":'Appartement',
      "sold":false
    },
    {
      "title": 'Belle villa',
      "category":'Maison',
      "sold":true
    }
  ]

  propertiesSubject = new Subject<any[]>();


  constructor() { }

  emitProperties(){
    this.propertiesSubject.next(this.properties);
  }

  getProperties(){};
}
