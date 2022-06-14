// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'popn-media',
    appId: '1:367603372360:web:6f6a853bb12086057be37d',
    storageBucket: 'popn-media.appspot.com',
    locationId: 'us-east4',
    apiKey: 'AIzaSyD5sofh7DSaeoYAaL8lUA599KPjnhmiNBU',
    authDomain: 'popn-media.firebaseapp.com',
    messagingSenderId: '367603372360',
    measurementId: 'G-T0M2SSE041',
  },
  production: false,
  apiUrl: 'http://localhost:8080',
  authenticationEndpoint: 'http://localhost:8080',
  urlEndpoint: 'http://localhost:8080',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
