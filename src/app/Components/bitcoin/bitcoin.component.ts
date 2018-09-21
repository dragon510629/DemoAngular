import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  public news : any [];
  constructor(public newservice: NewsService) { }

  ngOnInit() {
      this.getAll();
  }


  getAll() {
      this.newservice.getBitcoin().subscribe((data: any) => {
          this.news = data.articles;
      });
  }
}
