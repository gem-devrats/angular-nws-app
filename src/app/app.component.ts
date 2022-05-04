import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  res : any = {};
  ngOnInit(): void {
    axios('https://newsapi.org/v2/everything?q=Top%20news&from=2022-04-04&sortBy=publishedAt&language=en&apiKey=e1f644af21fd48d7a4c41967d83f41df')
    .then(response => {
      this.res = response.data.articles;
    }).then(e=>{
      console.log(e);
    });
  }
  
  topic(value:string){
    console.log(value);
    axios('https://newsapi.org/v2/everything?q='+ value + '&from=2022-04-04&sortBy=publishedAt&language=en&apiKey=e1f644af21fd48d7a4c41967d83f41df')
    .then(response => {
      console.log(response.data.articles);
      this.res = response.data.articles;
    }).then(e=>{
      console.log(e);
    });
  }

  title = 'angular-forms-tutorial';
}
