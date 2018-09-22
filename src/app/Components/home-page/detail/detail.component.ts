import { Component, OnInit , OnDestroy} from '@angular/core';
import { NewsService } from '../../../Service/news.service';
import { Router , ActivatedRoute } from '@angular/router';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public inde : number;
  public sub : any;
  public news : any;
  public new : any = []; 
  constructor(public New : NewsService , private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.inde = params['id'];
    });
    this.getAll();
  }

  getAll() {
    this.New.getAll().subscribe((data: any) => {
        this.news = data.articles;
        this.new = this.news[this.inde];
    });
  }
  

}
