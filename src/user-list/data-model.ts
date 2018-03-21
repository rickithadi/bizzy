// export class User {
//   id: number;
//   name: string;
//   shots: number;
//   volume: number;
//   modifier: number;
//   constructor(
//     id: number,
//     name: string,
//     shots: number,
//     volume: number,
//     modifier: number
//   ) {
//     this.id = id;
//     this.name = name;
//     this.shots = shots;
//     this.volume = volume;
//     this.modifier = modifier;
//   }
// }




export class Hero {
  id = 0;
  name = '';
  shots = 0;
  volume = 0;
  modifier = 1;
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'hero1',
    shots: 0,
    volume: 0,
    modifier: 1,
    addresses: [
      { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },

      { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' }
    ]
  },
  {
    id: 2,
    name: 'hero2',
    shots: 0,
    volume: 0,
    modifier: 1,

    addresses: [
      { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' }
    ]
  },
  {
    id: 3,
    name: 'hero3',
    shots: 0,
    volume: 0,
    modifier: 1,

    addresses: [
      { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
      { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' }
    ]
  },
  {
    id: 4,
    name: 'hero4',
    shots: 0,
    volume: 0,
    modifier: 1,

    addresses: []
  },
  {
    id: 5,
    name: 'hero5',
    shots: 0,
    volume: 0,
    modifier: 1,

    addresses: []
  }
];
