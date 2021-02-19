import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // user="moi"
  // password="Test2021"
  // creer un utilisateur avec Role Authenticated
  login(credentials) {
    this.http.post('http://localhost:1337/auth/local', credentials)
            .subscribe(
              (res:any) => localStorage.setItem('token', res.jwt),
                  err => console.log(err));
  }

  // localStorage.getItem(name)
  // localStorage.getItem(token)
  //   ''  .removeItem    .clear
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEyODA2NjQ1LCJleHAiOjE2MTUzOTg2NDV9.0XA3rzdgD4qXSH1geztQp_p-FTD353ToMgFKrdxdAnQ"
  logout() {

  } 
}
