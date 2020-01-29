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
   restItems: Certification[];
   restItemsUrl = 'http://roaggarw-lap.oradev.oraclecorp.com:8888/certificates/list';
   constructor(private http: HttpClient) {}
   bye(){    
	   this.getCertifications();   
	} 
  
  ngOnInit() {
   this.getCertifications(); 
  }
	
	 // Read all REST Items
  getCertifications(): void {
    this.getCertificationItems()
      .subscribe(
        restItems => {
          this.restItems =<Certification[]>restItems;
          console.log(this.restItems); 
        }
      )
  }
  
   // Rest Items Service: Read all REST Items
  getCertificationItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
 	
}
