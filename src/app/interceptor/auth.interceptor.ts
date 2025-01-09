import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshingToken = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();

    if (accessToken) req = this.addToken(req, accessToken);

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addToken(req: HttpRequest<any>, accessToken: any) {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
    });
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshAccessToken().pipe(
        switchMap((response: any) => {
          this.isRefreshingToken = false;
          this.refreshTokenSubject.next(response.data.accessToken);
          return next.handle(this.addToken(req, response.data.accessToken));
        }),
        catchError((error) => {
          this.isRefreshingToken = false;
          this.authService.logout();
          return throwError(() => error);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(accessToken => accessToken !== null),
        take(1),
        switchMap((response: any) => {
          return next.handle(this.addToken(req, response.data.accesstoken));
        })
      );
    }
  }
}