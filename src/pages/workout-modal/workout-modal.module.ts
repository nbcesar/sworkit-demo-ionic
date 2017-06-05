import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutModalPage } from './workout-modal';

@NgModule({
  declarations: [
    WorkoutModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutModalPage),
  ],
  exports: [
    WorkoutModalPage
  ]
})
export class WorkoutModalPageModule {}
