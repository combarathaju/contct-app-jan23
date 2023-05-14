import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASE_URL='https://contact-app-z0fp.onrender.com'
  constructor(private http:HttpClient) { }


  //to handle errors
  handleError(error:HttpErrorResponse){
 let errorMsg:string=''
 
if(error.error){
   //client error
   errorMsg = `Error: ${error.message}`
 }
 else{
   errorMsg = `status: ${error.status}  \n Error: ${error.message}`

}
return throwError(()=>errorMsg)

  }

 // get all contacts api
getAllContacts(){
  //api call: url:http://localhost:3000/contacts req: get
 return this.http.get(`${this.BASE_URL}/contacts`)
}
// to view a contact
viewContact(id:any){
return this.http.get(`${this.BASE_URL}/contacts/${id}`)
}
// to get a particular group
getGroup(id:any){
  //http://localhost:3000/groups
  return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

getGroups(){
  return this.http.get(`${this.BASE_URL}/groups`)


}
//add  contact
addContact(contact:ContactSchema){
//api call
return this.http.post(`${this.BASE_URL}/contacts`,contact)
}
// delete contact
deleteContact(id:any){
  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
 
}
//edit a contact
editContact(id:any,contact:ContactSchema){
//api call
return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}
}
