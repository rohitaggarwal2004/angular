import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ContactmeService} from "../../services/contactme.service";


@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  public greetings: String = "Hello!,";
  public message: String = "Please provide your contact info. ";
  public fname:String;
  public lname:String;
  public email:String;
  public comment:String;
  public phone:String;
  public disabled :boolean =false;
  constructor(private contactService: ContactmeService) { }
 
 
  

  ngOnInit() {
  }
  getNote()
  {
  	return "Note : Will contact you at the earliest.But friends, am NOT running any hiring company(s).";
  }
  saveInfo()
  {

  		 let contacts = {
			    fname:this.fname,
				lname:this.lname,
				phone:this.phone,
				email:this.email,
				comment:this.comment
			};
			
			
		this.contactService.saveContact(contacts);
	
  			
  			
    
  	
  }
}
