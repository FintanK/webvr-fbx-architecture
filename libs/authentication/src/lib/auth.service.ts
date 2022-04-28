import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  environment: any;

	constructor(private http: HttpClient, @Inject( 'env' ) environment) {
	  this.environment = environment;
  }

	user(): Observable<any> {
		return this.http.get('/user');
	}

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.environment.endpoints.restAPIService + 'users/login', loginRequest);
  }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(this.environment.endpoints.restAPIService + 'users/signup', signupRequest);
  }
}
