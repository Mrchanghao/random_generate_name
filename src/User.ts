import faker from 'faker'
import {Marker} from './CustomMap';


faker.locale = 'ko'
// user class
export class User implements Marker {
  // props initiallize 
  name: string;
  location: {
    lat: number
    lng: number
  };
  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  makeContent(): string {
    return `<h1>name: ${this.name}</h1>`
  }
}

