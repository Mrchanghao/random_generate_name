import faker from 'faker'
import { Marker } from './CustomMap';

faker.locale = 'ko'

export class Compnay implements Marker {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue'

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  makeContent(): string {
    return `<div>
      <h1>name: ${this.name}</h1>;
      <h3>catchPhrase: ${this.catchPhrase}</h3>
    </div>
    `
  }

}