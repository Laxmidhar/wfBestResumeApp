import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobprofileComponent } from './jobprofile/jobprofile/jobprofile.component';
import { SettingComponent } from './setting/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    JobprofileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
