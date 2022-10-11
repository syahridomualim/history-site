import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class EventTodayService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getAllEvent() : Observable<ResponseData>{
    return this.httpClient.get<ResponseData>(`${this.apiUrl}/date`)
  }

}