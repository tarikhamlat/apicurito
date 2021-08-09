import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OasCreationService {

  constructor(private http: HttpClient) { }



  getData(id:any){

    const httpHeaders = new HttpHeaders().append('Content-Type', 'application/json')

   const httpParams = new HttpParams()
    .append('resourceId',id)
 


    return this.http.get(`${environment.oasCreationUrl}/openapis/load-file`,{headers: httpHeaders, params:httpParams, responseType: 'blob'})
  }
}
