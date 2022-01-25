import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    public form: FormGroup;
    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        let email: string ='';
        let password: string='';
        this.form = new FormGroup({
            'email': new FormControl(email, [Validators.required, Validators.email]),
            'password': new FormControl(password, [Validators.required, Validators.minLength(6)])
        })
    }

    onSubmit() {
        console.log(this.form);
    }
}