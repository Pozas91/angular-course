import {Actions, Effect, ofType} from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthResponseData} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }
      ).pipe(
        // Success Handling
        map(resData => {
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);

          return of(new AuthActions.Login({
            email: resData.email, userId: resData.localId, token: resData.idToken, expirationDate: expirationDate
          }));
        }),
        // Error Handling
        catchError(error => of()),
      );
    }),
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
