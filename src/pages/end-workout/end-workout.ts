import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-end-workout',
  templateUrl: 'end-workout.html',
})
export class EndWorkoutPage {

  timeWorked: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    this.timeWorked = this.navParams.data.time;
  }

  goMain() {
    this.navCtrl.setRoot(HomePage);
  }
}
