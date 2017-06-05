import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutHomePage } from './workout-home';

@NgModule({
  declarations: [
    WorkoutHomePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutHomePage),
  ],
  exports: [
    WorkoutHomePage
  ]
})
export class WorkoutHomePageModule {}
