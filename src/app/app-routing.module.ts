import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobprofileComponent } from './jobprofile/jobprofile/jobprofile.component';
import { SettingComponent } from './setting/setting/setting.component';

const routes: Routes = [
  { path: '', redirectTo: '/jobprofile', pathMatch: 'full' },
  { path: 'jobprofile', component: JobprofileComponent },
  { path: 'setting', component: SettingComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
