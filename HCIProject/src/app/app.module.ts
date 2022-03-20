import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { Test1Diaglog } from './home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothesComponent } from './clothes/clothes.component';
import { BooksComponent } from './books/books.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Diaglog,
    SportsComponent,
    ElectronicsComponent,
    ClothesComponent,
    BooksComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'cart', component: CartComponent},
      { path: 'sports', component:  SportsComponent},
      { path: 'electronics', component:  ElectronicsComponent},
      { path: 'clothes', component:  ClothesComponent},
      { path: 'books', component: BooksComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
