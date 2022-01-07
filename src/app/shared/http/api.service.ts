import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL: string = "https://api.cuisinedu.cluster-ig4.igpolytech.fr/api/v1"
  constructor(private http: HttpClient) { }

  get<T>(path: string, body: {[key: string]: string;}){
    return this.getObservable<T>(path, body).toPromise()
  }

  getObservable<T>(path: string, body: {[key: string]: string}){
    return this.http.get<T>(`${this.apiURL}${path}${path.includes("?") ? "&" : "?"}${
      Object.keys(body).map((b) => {
        return `${b}=${encodeURIComponent(body[b])}`
      }).join("&")
    }`)
  }

  post<T>(path: string, body: {[key: string]: any}){
    return this.postObservable<T>(path, body).toPromise()
  }

  postObservable<T>(path: string, body: {[key: string]: any}){
    return this.http.post<T>(`${this.apiURL}${path}`, body)
  }

  delete<T>(path: string, body: {[key: string]: any}){
    return this.deleteObservable<T>(path, body).toPromise()
  }

  deleteObservable<T>(path: string, body: {[key: string]: any}){
    return this.http.delete<T>(`${this.apiURL}${path}`, body)
  }

  put<T>(path: string, body: {[key: string]: any}){
    return this.putObservable<T>(path, body).toPromise()
  }

  putObservable<T>(path: string, body: {[key: string]: any}){
    return this.http.put<T>(`${this.apiURL}${path}`, body)
  }
}
