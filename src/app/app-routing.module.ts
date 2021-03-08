import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { GiftComponent } from './components/gift/gift.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AccWomenComponent } from './components/acc-women/acc-women.component';
import { AccMenComponent } from './components/acc-men/acc-men.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'gift', component: GiftComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'myaccount', component: MyAccountComponent},
  { path: 'men-accessories', component: AccMenComponent},
  { path: 'women-accessories', component: AccWomenComponent },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
