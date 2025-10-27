import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from "@angular/material/icon";
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSliderModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
  providers: [
    {
      provide: SETTINGS,
      useValue: environment.production ? undefined : {
        host: 'localhost:8080',
        ssl: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
