import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class NewsService {
    public API_URL = 'https://newsapi.org/v2/top-headlines?';
    public API_URLE = 'https://newsapi.org/v2/everything?'
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${this.API_URL}country=us&apiKey=f488f964736f45408fe75073032d9304`);
    }
    getApple() {
        return this.http.get(`${this.API_URLE}q=apple&from=2018-09-20&to=2018-09-20&sortBy=popularity&apiKey=f488f964736f45408fe75073032d9304`);
    }
    getBitcoin(){
        return this.http.get(`${this.API_URLE}q=bitcoin&from=2018-08-21&sortBy=publishedAt&apiKey=f488f964736f45408fe75073032d9304`)
    }
}
