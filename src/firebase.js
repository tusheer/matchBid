import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
	apiKey: 'AIzaSyDzuWbvhb_lO47dEK_MpNkCExrc8xWaQAQ',
	authDomain: 'game-bid.firebaseapp.com',
	databaseURL: 'https://game-bid.firebaseio.com',
	projectId: 'game-bid',
	storageBucket: 'game-bid.appspot.com',
	messagingSenderId: '469874610761',
	appId: '1:469874610761:web:3729c6bdfcbf433a',
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export { firebase, firebaseMatches, firebasePromotions, firebaseTeams, firebasePlayers, firebaseDB };
