import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    public news : any [];
    constructor(public newservice: NewsService) { }

    ngOnInit() {
        this.getAll();
    }


    getAll() {
        this.newservice.getAll().subscribe((data: any) => {
            this.news = data.articles;
            console.log(this.news);
        });
    }
    onDetail(value){
        console.log(value);  
    }
}
