import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject } from "rxjs";

/**
 * This service class is a communication link between the control that causes network activity and the component that
 * has to display an overlay.
 */
@Injectable({
  providedIn: "root",
})
export class LoadingOverlayService {
  isLoading = new BehaviorSubject<boolean>(false);

  loaderC1 = new BehaviorSubject<boolean>(false);

  loaderC2 = new BehaviorSubject<boolean>(false);


  loaderproperty={
    c1:{loading:false},
    c2:{loading:false}
  }

  elementID:string[]=[];

  parentDom = new BehaviorSubject<string>('');


  result(){
    this.elementID.push(this.parentDom.value)

    console.log(this.elementID,"----------------------------")
    console.log(this.loaderproperty,"----------------------------")
    console.log(typeof(this.parentDom.value),"----------------------------")

    console.log(this.loaderproperty[]);






  }

  apiLoading={
    isActivated1:false,
    isActivated:true
  }

  /**
   * Default constructor.
   * @param http The HTTP client instance for making network calls.
   */
  constructor(private http: HttpClient) {}

  /**
   * This method calls on the behaviour subject and passes true to enable the overlay component to show the overlay (
   * The overlay components should have subscribed to this behaviour subject).
   */
  public show(): void {
    // this.isLoading.next(true);
    console.log(this.loaderC1.value);
    this.loaderC1.next(true);
    console.log(this.loaderC1.value);

  }

  public hide(): void {
    // this.isLoading.next(false);
    this.loaderC1.next(false);

    // this._overlayHandle = '';
  }

  /**
   * This private varialbe will hold the reference to the overlay handle that has to show the overlay once the network activity starts.
   */
  // private _overlayHandle: string = "";

  // public set overlayScope(overlayHandle: string) {
  //   this._overlayHandle = overlayHandle;
  // }

  getData() {
    return this.http.get("http://localhost:3000/");
  }

  getData1() {
    return this.http.get("http://localhost:3000/");
  }
}
