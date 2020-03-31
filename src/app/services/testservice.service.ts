import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private httpClient: HttpClient) { }
  successClick() {
    console.log('service');
  }
}
