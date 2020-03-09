import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Ang';

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

  getSoldeValue(index){
    if(this.properties[index].sold){
      return 'red';
    }else{
      return 'green'
    }
  }
}
