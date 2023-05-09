import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { LoadingOverlayService } from "../loading-overlay.service";

@Component({
  selector: "app-c1",
  templateUrl: "./c1.component.html",
  styleUrls: ["./c1.component.scss"],
})
export class C1Component implements OnInit {

  @ViewChild('myBtn')
  myBtn!: ElementRef;

  contents: Object | undefined;
  load:boolean=this.service.loaderC1.value

  isLoading = this.service.isLoading.value;
  onClick() {

    console.log(this.myBtn.nativeElement.parentElement.id);

    // event.nativeElement.parentNode.id
    this.service.parentDom.next(this.myBtn.nativeElement.parentElement.id);
    this.service.getData().subscribe((results) => (this.contents = results));

    this.service.result()
  }

  constructor(public service: LoadingOverlayService, private el: ElementRef) {}

  ngOnInit(): void {

    this.service.loaderC1.subscribe(i=>{
      console.log(i, "C1 LOADER COMPONENT");

    })

    // console.log(this.myBtn.nativeElement.className);


  }
}
