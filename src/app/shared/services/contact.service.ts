import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts$ = new BehaviorSubject([]);

  constructor(private http:HttpClient) { }

  getContactsFromApi() {
    this.http.get('http://localhost:1337/contacts').subscribe(
            (res:any) => this.contacts$.next(res));
    
  }


  postContactToApi(contactObj) {
    // let httpheaders = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});
    // this.http.post('http://localhost:1337/contacts', contactObj ,{headers: httpheaders})
    this.http.post('http://localhost:1337/contacts', contactObj )
         .subscribe(res => console.log() ,
                    err => console.log(err));
  }

  /*
  On peut gérer l'ajout du token dans les headers de la requete de façon automatiise
  
  via les Interceptor
  -> Ajouter auto une clé API ou un token
  -> Ajouter auto un loader 
  -> gérer les erreurs 401/403/400/500
  */
 deleteContactInApi(contactId:number){
   this.http.delete('http://localhost:1337/delete'+contactId);
 }
}
