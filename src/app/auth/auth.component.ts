import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
    constructor(private dialogRef: MatDialogRef<AuthComponent>) {}

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
        this.dialogRef.close(this.form.value);
    }
}