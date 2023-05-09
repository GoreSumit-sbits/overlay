import { Component, OnInit } from '@angular/core';
import { LoadingOverlayService } from '../loading-overlay.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  isLoading = this.service.isLoading.value;

  constructor(private service:LoadingOverlayService) { }

  ngOnInit(): void {
  }

}
