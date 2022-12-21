import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBseApiResponse } from './models';
import { Observable } from 'rxjs';


interface HeaderParams {
  token?: string;
  param?: any;
}

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  buildHeaders(params?: HeaderParams) {
    return {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${params?.token || null}`,
        // 'Accept-Language': language,
      },
      params: params?.param || null,
    };
  };

  doGet<T>(url: string, param?: HeaderParams): Observable<IBseApiResponse<T>> {
    return this.http.get<IBseApiResponse<T>>(this.baseUrl + url, this.buildHeaders(param));
  }
}
