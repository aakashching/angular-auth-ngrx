import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authSelector } from '../store/reducer/auth.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
token:string;
user:any;
show:boolean=false;
  constructor(private store:Store,private router:Router) { }

  ngOnInit(): void {
 
  
  this.store.pipe(select(authSelector)).subscribe((d:any)=>{
    this.token=d.authToken
    // alert(d.authToken)
  })


  
  this.store.select(authSelector).subscribe((d:any)=>{
    this.user=d.user
    // alert(d.authToken)
  })
  }
  ngOnDestroy(): void {
      
  }
  showToken(){
    // @ts-ignore
    this.store.select("auth").subscribe(state=>console.log(state))
    
      this.show=!this.show
  }
  removeToken(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
