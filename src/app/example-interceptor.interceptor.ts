import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, finalize, map, tap } from "rxjs";
import { LoadingOverlayService } from "./loading-overlay.service";

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {
  constructor(private service: LoadingOverlayService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.service.show();
    console.log(this.service.loaderC1.value);

    return next.handle(request).pipe(finalize(
      ()=>{
        this.service.hide();
      }
    ));
  }
}
