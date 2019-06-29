
import { CustomMap } from './CustomMap';
import {User} from './User'
import { Compnay } from './Company';

const customMap = new CustomMap('map');
const user = new User();
const company = new Compnay();


// class Car {

//   color: string
//   location: {
//     lat: number
//   };

//   constructor() {
//     this.color = 'red'
//     this.location = {
//       lat: 0
//     }
//   }
// }  

// const car = new Car()

customMap.addMarker(company)
customMap.addMarker(user)

// customMap.addMarker(car)