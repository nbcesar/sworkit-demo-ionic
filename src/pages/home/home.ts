import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutHomePage } from '../workout-home/workout-home'
import { WorkoutsProvider } from '../../providers/workouts/workouts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public workoutsService: WorkoutsProvider
  ) {
    console.log('Hey Sworkit. I hope you like this little demo. :)')
  }

  goToWorkout(workout) {
    // Get workout data
    var data = this.workoutsService.getWorkout(workout);
    // Push to workout-home
    this.navCtrl.push(WorkoutHomePage, data);


  }

}
