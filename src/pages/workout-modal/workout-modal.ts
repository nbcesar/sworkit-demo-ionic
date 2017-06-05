import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { WorkoutPage } from '../workout/workout';

@IonicPage()
@Component({
  selector: 'page-workout-modal',
  templateUrl: 'workout-modal.html',
})
export class WorkoutModalPage {

  workoutData: object;
  time: number = 5;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.workoutData = this.navParams.data;
  }

  ionViewDidLoad() {
  }

  back() {
    this.viewCtrl.dismiss();
  }

  changeTime(direction) {
    if (direction == 'up' && this.time < 60) this.time += 5;
    else if (direction == 'down' && this.time > 5) this.time -= 5;
  }

  begin() {
    //this.viewCtrl.dismiss(this.time);
    this.workoutData['time'] = this.time;
    this.viewCtrl.dismiss().then(()=> {
      this.navCtrl.push(WorkoutPage, this.workoutData);
    })

  }
}
