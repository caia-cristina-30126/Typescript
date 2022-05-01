// I am going to create and export a class from this file (capital letter)

import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()) // we use parseFloat function bc the lat and lng are strings in the documentation of faker library
    };
  }
  markerContent(): string{
    return `User name: ${this.name}`;
  }
  color: string = 'red';
}
