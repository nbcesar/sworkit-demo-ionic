import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';

import { WorkoutModalPage } from '../workout-modal/workout-modal';
import { WorkoutPage } from '../workout/workout';

@IonicPage()
@Component({
  selector: 'page-workout-home',
  templateUrl: 'workout-home.html',
})
export class WorkoutHomePage {

  workoutData;
  core: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public platform: Platform
  ) {
    this.workoutData = this.navParams.data;
    this.core = this.platform.is('core');
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }

  workoutOptions() {
    let modal = this.modalCtrl.create(WorkoutModalPage, this.workoutData);
    modal.onDidDismiss(data => {
      if (!data) return;
      this.workoutData.time = data;
      this.navCtrl.push(WorkoutPage, this.workoutData);
    });
    modal.present();
  }
}
