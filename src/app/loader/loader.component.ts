import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingOverlayService } from '../loading-overlay.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private service:LoadingOverlayService) { }

  // isLoading: BehaviorSubject<boolean> = this.service.isLoading;


  ngOnInit(): void {
    // console.log(this.el);
    // console.log("element",this.el.nativeElement.parentElement.id);


    // console.log(this.el.nativeElement.parentNode.childNodes);


  }

}
