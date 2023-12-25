import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";

// Interfaces
import {Cabin} from "../interfaces/cabin";
import {EnvironmentType} from "../interfaces/environment-type";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CabinService {
  private myAppUrl: string;

  constructor(private http: HttpClient) {
      this.myAppUrl = (<EnvironmentType>environment).endpoint;
  }

  getListCabins(): Observable<Cabin[]> {
    return this.http.get<Cabin[]>(this.myAppUrl + 'getCabins/');
  }

}
