import { Component, OnInit, Input } from '@angular/core';
import { AppLoaderService } from '../app-loader.service';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {


  @Input() color = 'primary';
  @Input() mode = 'indeterminate';
  @Input() value = 50;

  isLoading = this.loaderService.isLoading;

  constructor(private readonly loaderService: AppLoaderService) { }

  ngOnInit(): void {
  }

}
