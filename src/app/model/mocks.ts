import { User } from './user.model';

export const USER_DATA: User[] = [{
  firstName : 'Bill',
  lastName : 'Gates',
  isWorking : true,
  income  : 50000,
  company : 'Microsoft',
  votes : 120,
  dob : new Date('Dec 21, 1965'),
  image : 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'
},{
  firstName : 'steve',
  lastName : 'jobs',
  isWorking : false,
  income  : 0,
  company : 'Apple',
  votes : 180,
  dob : new Date('Aug 1, 1965'),
  image : 'https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg'
},{
  firstName : 'tim b.',
  lastName : 'lee',
  isWorking : true,
  income  : 30000,
  company : 'World Wide Web',
  votes : 100,
  dob : new Date('Jan 2, 1965'),
  image : 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg'
}
];
