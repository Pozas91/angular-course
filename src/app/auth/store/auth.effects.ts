import {Actions, Effect, ofType} from '@ngrx/effects';

import * as AuthActions from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthResponseData} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

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

          return new AuthActions.Login({
            email: resData.email, userId: resData.localId, token: resData.idToken, expirationDate: expirationDate
          });
        }),
        // Error Handling
        catchError(errorRes => {

          let errorMessage = 'Oops! Something go wrong';

          if (!errorRes.error || !errorRes.error.error) {
            return of(new AuthActions.LoginFail(errorMessage));
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
              break;
            case 'EMAIL_NOT_FOUND':
              errorMessage = 'This email does not exist';
              break;
            case 'INVALID_PASSWORD':
              errorMessage = 'This password is not correct';
              break;
          }

          return of(new AuthActions.LoginFail(errorMessage));
        }),
      );
    }),
  );

  @Effect({dispatch: false})
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient, private router: Router) {
  }
}
