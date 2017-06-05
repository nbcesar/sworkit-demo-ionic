import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WorkoutHomePageModule } from '../pages/workout-home/workout-home.module';
import { WorkoutModalPageModule } from '../pages/workout-modal/workout-modal.module';
import { WorkoutPageModule } from '../pages/workout/workout.module';
import { EndWorkoutPageModule } from '../pages/end-workout/end-workout.module';

import { WorkoutsProvider } from '../providers/workouts/workouts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
//    WorkoutHomePage,
//    WorkoutModalPage,
//    WorkoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WorkoutHomePageModule,
    WorkoutModalPageModule,
    WorkoutPageModule,
    EndWorkoutPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
//    WorkoutHomePage,
//    WorkoutModalPage,
//    WorkoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutsProvider
  ]
})
export class AppModule {}
