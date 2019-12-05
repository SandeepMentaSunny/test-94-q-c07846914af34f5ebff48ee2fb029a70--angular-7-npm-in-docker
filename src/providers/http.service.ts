import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public apiUrl: string = environment.apiUrl || '';

  constructor(public http: HttpClient) { }

  public generateVideo(type: string, payload: object) {
    return this.http.post(`${this.apiUrl}/api/process-${type}`, payload).pipe(tap(_ => console.log('fetched video')), catchError(this.handleError('genetate video', [])));
  }

  public combineVideo(payload: object) {
    return this.http.post(`${this.apiUrl}/api/combine-video`, payload).pipe(tap(_ => console.log('fetched video')), catchError(this.handleError('genetate video', [])));
  }

  public filterPayload(type, payload){
    if(type === 'interval'){
      delete payload[`interval_range`];
      delete payload[`no_of_segemnts`];
    }else if(type === 'range'){
      delete payload[`interval_duration`];
      delete payload[`no_of_segemnts`];
    }else{
      delete payload[`interval_range`];
      delete payload[`interval_duration`];
    }
    delete payload[`segmentSettings`];
    return payload;
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}