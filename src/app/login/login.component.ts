import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


// private baseUrl = 'http://127.0.0.1:8000/api/todo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  public form = {
    email:null,
    password:null
  };
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
    });
   }

   onSubmit() {
    this.http.post('http://127.0.0.1:8000/api/login',this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
   }

  ngOnInit() {

  }

}
