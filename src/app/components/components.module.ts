import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModel } from './material.model';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GiftComponent } from './gift/gift.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { AccMenComponent } from './acc-men/acc-men.component';
import { AccWomenComponent } from './acc-women/acc-women.component';
@NgModule({
    declarations: [
        ComponentModule,
        FooterComponent,
        AboutUsComponent,
        GiftComponent,
        MyAccountComponent,
        ContactUsComponent,
        BlogComponent,
        AccMenComponent,
        AccWomenComponent
    ],
    imports: [
        NgbModule,

        MaterialModel,
        CommonModule,
        RouterModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [ComponentModule]
})
export class ComponentModule { }


