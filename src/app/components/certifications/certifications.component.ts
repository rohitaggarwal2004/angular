import { Component, OnInit } from '@angular/core';
import { Certification } from './model/certification.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
	
  certifications: Certification[] =[
  new Certification("11","22","./model/gcp.png","2019")
  ];	
   restItems: any;
  restItemsUrl = 'http://roaggarw-lap.oradev.oraclecorp.com:9001/s1/s1/hello';
  
  constructor(private http: HttpClient) {}
 
  bye(){    
   this.getRestItems();   
  } 
  
  ngOnInit() {
  }
	
	 // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          alert(restItems);
         
        }
        
      )
  }
  
   // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
 	
}
