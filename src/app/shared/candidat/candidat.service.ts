import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CandidatService {

  httpheaders = new HttpHeaders({ 
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
});

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/candidat');
  }

 /* get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }*/
  login(candidat_cin:Number):Observable<any>{
    let result: Observable<Object>;
    
    console.log("login service"+candidat_cin);
    return this.http.get<any>("//localhost:8080/api/candidat/"+candidat_cin );

  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    console.log("service");
    console.log("car"+typeof car);

    return this.http.post<any>("//localhost:8080/api/candidat", JSON.stringify(car),{headers:this.httpheaders} );
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
