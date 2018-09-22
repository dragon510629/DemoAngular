import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { BitcoinComponent } from './Components/bitcoin/bitcoin.component';
import { DetailComponent } from './Components/home-page/detail/detail.component';

const appRoutes : Routes = [
  {
    path : 'homepage',
    component : HomePageComponent
  },
  {
    path : 'bitcoin',
    component : BitcoinComponent
  },
  {
    path : '',
    redirectTo : '/homepage',
    pathMatch : 'full'
  },
  {
    path : 'detail/:id',
    component : DetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    BitcoinComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
