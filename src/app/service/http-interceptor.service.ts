  
import {
  Injectable,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  environment
} from '../../environments/environment';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
      const baseUrl = environment.host;
          request = request.clone({
              url: `${baseUrl}${request.url}`,
          });
      return next.handle(request);
  }
}