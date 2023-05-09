import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { LoadingOverlayService } from "./loading-overlay.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "overlay";


  

  contents: Object | undefined;


  isLoading = this.service.isLoading.value;
  onClick(event: any) {
    this.service.getData().subscribe((results) => (this.contents = results));
  }
  
  constructor(private service: LoadingOverlayService, private el: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
}
