import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = "http://localhost:8080/api/v1"
  constructor(private http: HttpClient) { }

  get<T>(path: string, body: {[key: string]: string;}){
    return this.http.get<T>(`${this.apiURL}${path}${path.includes("?") ? "&" : "?"}${
      Object.keys(body).map((b) => {
        return `${b}=${encodeURIComponent(body[b])}`
      }).join("&")
    }`).toPromise()
  }

  post<T>(path: string, body: {[key: string]: any}){
    return this.http.post<T>(`${this.apiURL}${path}`, body).toPromise()
  }

  delete<T>(path: string, body: {[key: string]: any}){
    return this.http.delete<T>(`${this.apiURL}${path}`, body).toPromise()
  }
}
