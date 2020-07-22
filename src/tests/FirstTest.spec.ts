import Person from '@models/Person';

test('it should be ok', () => {
  const person = new Person();

  person.firstName = 'Diego';

  expect(person.firstName).toEqual('Diego');
});
