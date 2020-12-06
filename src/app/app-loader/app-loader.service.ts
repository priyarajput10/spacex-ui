import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {


  /**
   * The App Loader service
   *
   * Loader service will be used to display loaders
   */

  isLoading = new Subject<boolean>();
  private counter = 0;

  showLoader() {
    this.counter++;
    this.isLoading.next(true);
  }

  hideLoader() {
    this.counter--;
    /**
     * Wait for the Sync API call if any
     */
    if (this.counter === 0) {
      setTimeout(() => {
        this.isLoading.next(false);
      });
    }
  }

  constructor() { }
}

