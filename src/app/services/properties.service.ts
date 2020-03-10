import { Injectable } from '@angular/core';


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
  constructor() { }

  getProperties(){
    return new Promise(
      (resolve,rejects)=>{
        if(this.properties && this.properties.length>0){
          resolve(this.properties);
        }
        else{
          const error = new Error("properties does not existe");
          rejects(error);
        }
      }
    );
  }
}
