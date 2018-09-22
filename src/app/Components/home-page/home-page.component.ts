import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    public index : number = null;
    public news : any [];

    constructor(public newservice: NewsService) { }

    ngOnInit() {
        this.getAll();
    }

    
    getAll() {
        this.newservice.getAll().subscribe((data: any) => {
            this.news = data.articles;
        });
    }
    onDetail(value){
        this.index = value;
    }
}
