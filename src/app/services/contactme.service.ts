import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactmeService {

  constructor(private http:HttpClient) {}
  
	saveContact(contacts) {
	alert(JSON.stringify(contacts));
    this.http.post('http://localhost:9080/contactme/save', JSON.stringify(contacts), 
	{ 
	  headers: {'Content-Type': 'application/json'} 
	}).subscribe( (res) => {console.log('Response: ' + res);});



    }
}
