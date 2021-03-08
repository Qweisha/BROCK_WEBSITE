import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDateRangePicker, MatDateRangeInput } from '@angular/material/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const material = [
    MatSliderModule,
    MatButtonModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

];

@NgModule({
    imports: [material],
    exports: [material]

})
export class MaterialModel { }
