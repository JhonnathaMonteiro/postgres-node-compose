import Person from '@models/Person';

export class PersonController {
  teste() {
    const person = new Person();
    console.log(person);
  }
}
