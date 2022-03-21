import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { ExportToCSV } from "@molteni/export-csv";
import { DynamicToolbarComponent } from './dynamic-toolbar/dynamic-toolbar.component';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { StoreItemModalComponent } from './store-item-modal/store-item-modal.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DynamicCartComponent } from './dynamic-cart/dynamic-cart.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Test0DialogComponent } from './test0-dialog/test0-dialog.component';
import { Test1DialogComponent } from './test1-dialog/test1-dialog.component';
import { Test2DialogComponent } from './test2-dialog/test2-dialog.component';
import { Test3DialogComponent } from './test3-dialog/test3-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicToolbarComponent,
    DynamicGridComponent,
    StoreItemModalComponent,
    DynamicCartComponent,
    Test0DialogComponent,
    Test1DialogComponent,
    Test2DialogComponent,
    Test3DialogComponent
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
    MatSlideToggleModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'cart', component: AppComponent},
      { path: 'sports', component:  AppComponent},
      { path: 'electronics', component:  AppComponent},
      { path: 'clothes', component:  AppComponent},
      { path: 'books', component: AppComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
