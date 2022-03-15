import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.scss']
})
export class LoginSigninComponent implements OnInit {

  public signupForm !: FormGroup;
  public signinForm !: FormGroup;
  sgnin: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })

    this.signinForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });
    
    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    });
    }

    signUp(){

      this.http.post<any>("http://localhost:3000/signup", this.signupForm.value) 
      .subscribe(res =>{
        alert("Signup Successfull!")
        this.signupForm.reset();
        },err=>{
          alert("Something went wrong. Try again!")
        }
      )
    }

    signIn(){
       this.http.get<any>("http://localhost:3000/signup")
       .subscribe(res =>{
         const user = res.find((a:any) => {
           return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
         });
         if(user){
           alert("Sign In Success!");
           this.signinForm.reset();
           this.sgnin = true;
           this.router.navigate(['about-us']);
         }
         else{
           alert("User not found!");
         }
       }, err=>{
         alert("Something went wrong!");
       }
       )}
}

