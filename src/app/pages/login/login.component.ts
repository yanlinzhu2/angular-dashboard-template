import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Users } from '../../services/users';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loginLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onLogin() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid) {
      this.loginLoading = true;
      const {userName, password} = this.loginForm.value;

      if (Users[userName]["password"] === password) {
        let currentUser = {"userName": userName, "displayedName": Users[userName]["name"]}
        localStorage.setItem("finWhizLoginKey", JSON.stringify(currentUser))
        setTimeout(() => {
          this.loginLoading = false;
          this.router.navigate(['dashboard'])
        }, 2000)
      } else {
        this.loginLoading = false;
        this.message.create('error', 'Username or password is incorrect!')
      }
    }

  }

}
