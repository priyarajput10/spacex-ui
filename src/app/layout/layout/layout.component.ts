import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service'
import { AppLoaderService } from '../../app-loader/app-loader.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public yearsList = []
  public records: any = [];
  public filters = {
    year: '',
    launch: '', landing: '',
  }

  constructor(private layoutService: LayoutService,
    private loaderService: AppLoaderService) { }

  ngOnInit() {
    this.getRecords();
    this.years(2006, 2020)
  }

  /**
   * Years List
   * @param start 
   * @param end 
   */
  years(start, end) {
    for (let i = start; i <= end; i++) {
      this.yearsList.push(i);
    }
  }


  /**
   * Gets records
   */
  getRecords() {
    this.loaderService.showLoader();
    this.layoutService.getRecords(this.filters).subscribe(
      data => {
        this.loaderService.hideLoader();
        this.records = data;
      },
      err => {
        this.loaderService.hideLoader();
        console.error(err);
        alert("Some error occured")
      }
    );
  }


  /**
   * Successfuls launch
   * @param value 
   */
  successfulLaunch(value: string) {
    this.filters.launch = value;
    this.getRecords();
  }


  /**
   * Successfuls landing
   * @param value 
   */
  successfulLanding(value: string) {
    this.filters.landing = value;
    this.getRecords();
  }

  /**
   * Years filter
   * @param value 
   */
  yearFilter(value: string) {
    this.filters.year = value;
    this.getRecords();
  }




}
