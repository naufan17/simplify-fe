import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshingToken: boolean = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken: string | null = this.authService.getAccessToken();
    if (accessToken) req = this.addTokenHeader(req, accessToken);

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handleUnauthorized(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addTokenHeader(req: HttpRequest<any>, accessToken: any) {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
    });
  }
 
  private handleUnauthorized(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshAccessToken().pipe(
        switchMap((response: any) => {
          this.isRefreshingToken = false;
          this.refreshTokenSubject.next(response.data.accessToken);
          return next.handle(this.addTokenHeader(req, response.data.accessToken));
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
          return next.handle(this.addTokenHeader(req, response.data.accesstoken));
        })
      );
    }
  }
}