import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FirebaseService } from './firebase.service';

@Injectable({
	providedIn: 'root'
})
export class OneSignalService {

	constructor(
		private http: HttpClient,
		private firebase: FirebaseService,
		private router: Router
	) { }

	sendDirectMessage(id, message, info?) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Basic OWFjYjhmOTMtMzk1Yi00NGU0LTkyMGEtYjY2MjI3ZWI1M2Qz'
		});

		const options = { headers: headers };
		const dataSend = JSON.stringify({
			app_id: "d32974fc-eac0-416d-a22d-b2b4996d28fe",
			contents: { "en": message },
			include_player_ids: [id],
			data: {msgInfo: info}
		});

		this.http.post('https://onesignal.com:443/api/v1/notifications', dataSend, options).subscribe((data) => {
			console.log(data);
		});
	}

	async redirectTo(data){
		if(data.target === 'request-services'){
			const item = await this.firebase.obtenerUniqueIdPromise('request-services', data.idunico);
			//sse debe subir esta info a un servicio para que pueda ser tomada luego la idea es guardar el item
			this.router.navigate(['/'+data.target+'/']);
		}
	}
}
