import { Injectable } from '@angular/core';


@Injectable()
export class WorkoutsProvider {

  workouts: object = {
    'strength': {
      name: 'strength',
      title: 'Full Body',
      image: 'strength-color.jpg',
      description: 'Combination of upper body, core strength and lower body.',
      exercises: [
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
      ]
    },
    'cardio': {
      name: 'cardio',
      title: 'Light Warm Up Cardio',
      image: 'cardio-color.jpg',
      description: 'A lighter intesity cardio workout perfect for warmups, cooldowns and beginners.',
      exercises: [
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
      ]
    },
    'yoga': {
      name: 'yoga',
      title: 'Yoga Sun Salutation',
      image: 'yoga-color.jpg',
      description: 'Great sequence for warming up, cooling down or practicing poses.',
      exercises: [
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
      ]
    },
    'stretch': {
      name: 'stretch',
      title: 'Full Body Stretch',
      image: 'stretch-color.jpg',
      description: 'Full combination of all stretches.',
      exercises: [
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
        {name:'Push-ups', image:'pushup.jpg', video:'pushup.mp4'},
        {name:'Overhead Press', image:'overheadpress.jpg', video:'overheadpress.mp4'},
        {name:'Diamond Push-ups', image:'diamondpushup.jpg', video:'diamondpushup.mp4'},
        {name:'Overhead Arm Clap', image:'overheadarmclap.jpg', video:'overheadarmclap.mp4'},
        {name:'Wide Arm Push-ups', image:'widearmpushup.jpg', video:'widearmpushup.mp4'},
      ]
    }
  }

  constructor() {}

  getWorkout(workout) {
    return this.workouts[workout];
  }

}
