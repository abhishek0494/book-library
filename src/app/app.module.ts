import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookReducer } from './store/reducer';
import { bookEffects } from './store/effects'
import {BooksService} from './service/bookservice.service';
import { BooksComponent } from './components/books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookformComponent } from './components/bookform/bookform.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookformComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({books: BookReducer}),
    EffectsModule.forRoot([bookEffects])
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
