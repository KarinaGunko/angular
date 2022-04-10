import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from "@angular/router";
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},
  { path: 'price', component: PriceComponent},
  { path: 'contact', component: ContactComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    HomeComponent,
    ContactComponent,
    PriceComponent,
    NewsComponent,
    NavComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
