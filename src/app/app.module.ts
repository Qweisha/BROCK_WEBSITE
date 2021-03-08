import { QuickViewComponent } from './components/home/quick-view/quick-view.component';
import { GiftComponent } from './components/gift/gift.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import {  HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModel} from './components/material.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AccMenComponent } from './components/acc-men/acc-men.component';
import { AccWomenComponent } from './components/acc-women/acc-women.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    ContactUsComponent,
    MyAccountComponent,
    GiftComponent,
    QuickViewComponent,
    AccMenComponent,
    AccWomenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModel,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
