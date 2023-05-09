import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingOverlayService } from "../loading-overlay.service";

@Component({
  selector: "app-c2",
  templateUrl: "./c2.component.html",
  styleUrls: ["./c2.component.scss"],
})
export class C2Component implements OnInit {

  @ViewChild('myBtn')
  myBtn!: ElementRef;

  contents: Object | undefined;

  load=this.service.loaderC2.value;

  isLoading = this.service.isLoading.value;
  onClick() {
    console.log(this.myBtn.nativeElement.parentElement.id);
    this.service.parentDom.next(this.myBtn.nativeElement.parentElement.id);
    this.service.getData1().subscribe((results) => (this.contents = results));
    this.service.result()

  }

  constructor(private service: LoadingOverlayService, private el: ElementRef) {}
  ngOnInit(): void {}
}
