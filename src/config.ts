import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyAOee4BLN8Xv1Yc9H_shJc8pLaOQLyHH1s",
		authDomain: "crowdfood-9eca0.firebaseapp.com",
		databaseURL: "https://crowdfood-9eca0.firebaseio.com",
		projectId: "crowdfood-9eca0",
		storageBucket: "crowdfood-9eca0.appspot.com",
		messagingSenderId: "530075399462"
	}
};
