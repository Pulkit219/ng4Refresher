import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { AboutcomponentComponent } from './components/aboutcomponent/aboutcomponent.component';


const appRoutes: Routes = [
  { path: 'home', component: HomecomponentComponent },
  { path: 'about',component: AboutcomponentComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecomponentComponent,
    AboutcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
