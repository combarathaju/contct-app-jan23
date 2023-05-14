import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit{

  allContacts:any=[]
isLoading:boolean= true
errorMsg:string = ""
searchKey:string=""
constructor(private api:ApiService){



}
  ngOnInit(): void {
this.getAllContacts()

  }

  getAllContacts(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        console.log(response);
       setTimeout(() => {
        this.allContacts = response
        this.isLoading = false
       }, 500);
    
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMsg = err.message
        this.isLoading = false
      }
    }
    
    )
  }
  deleteContact(id:any){
this.api.deleteContact(id).subscribe({
  next:(response:any)=>{
this.getAllContacts()
  }
})
  }
  
  

}
