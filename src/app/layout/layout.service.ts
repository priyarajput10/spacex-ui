import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  getRecords(filters) {
    console.log("filters", filters)
    console.log("1", filters.year != '' && filters.landing != '' && filters.launch != '');
    console.log("2", filters.year == '' && filters.landing == '' && filters.launch != '')
    console.log("3", filters.year == '' && filters.landing != '' && filters.launch != '')
    if (filters.year != '' && filters.landing != '' && filters.launch != '') {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${filters.launch}&land_success=${filters.landing}&launch_year=${filters.year}`);
    } else if (filters.year == '' && filters.landing == '' && filters.launch != '') {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${filters.launch}`);
    } else if (filters.year == '' && filters.landing != '' && filters.launch != '') {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${filters.launch}&land_success=${filters.landing}`);
    } else {
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100`);
    }
  }
}
