import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EndWorkoutPage } from '../end-workout/end-workout';

@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage {

  workoutData: object;
  totalTime: number;
  displayTime: string;
  exerciseTime: number = 30;

  started: boolean = false;
  play: boolean = false;

  exerciseIndex: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.workoutData = this.navParams.data;
    this.totalTime = this.workoutData['time'] * 60;
    var minutes = Math.floor(this.totalTime/60);
    var seconds = (this.totalTime % 60 > 9) ? this.totalTime % 60 : "0" + this.totalTime % 60;
    this.displayTime = minutes + ":" + seconds;

  }

endWorkout() {
    let timeWorked = (this.workoutData['time'] * 60) - this.totalTime;
    timeWorked = Math.ceil(timeWorked / 60);
    this.navCtrl.push(EndWorkoutPage, {
      time: timeWorked
    });
  }

  startWorkouts() {
    var counter = setInterval(() => {
      if (this.play) {
        if (this.totalTime < 2) {
          clearInterval(counter);
          // Finish workout
          this.endWorkout();
        }
        // Adjust total time
        this.totalTime -= 1;
        var minutes = Math.floor(this.totalTime/60);
        var seconds = (this.totalTime % 60 > 9) ? this.totalTime % 60 : "0" + this.totalTime % 60;
        if (seconds > 30) this.exerciseTime = (this.totalTime % 60) - 30;
        else this.exerciseTime = (this.totalTime % 60);
        if (seconds == 30 || seconds == 0) {
          // Change exercise
          if (this.exerciseIndex == (this.workoutData['exercises'].length - 1)) this.exerciseIndex = 0;
          else this.exerciseIndex += 1;
        }
        this.displayTime = minutes + ":" + seconds;
      }
    }, 1000);
  }

  playPause() {
    if (!this.started && !this.play) {
      this.started = true;
      this.play = true;
      this.startWorkouts();
    }
    else this.play = !this.play;
  }

  changeExercise(direction) {
    if (direction == 'rewind' && this.exerciseIndex > 0) this.exerciseIndex -= 1;
    else if (direction == 'rewind' && this.exerciseIndex == 0) this.exerciseIndex = this.workoutData['exercises'].length - 1;
    else if (direction == 'forward' && this.exerciseIndex < (this.workoutData['exercises'].length - 1)) this.exerciseIndex += 1;
    else this.exerciseIndex = 0;
  }

}
