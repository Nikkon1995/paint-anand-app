import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";

interface query {
    name: string;
    contact: number;
    query: string;
    type: string;
    other?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor(private http: HttpClient) {}

    putUrl = 'https://paint-app-2af65-default-rtdb.firebaseio.com/formData.json';
    storeQuery(queryForm: NgForm) {
        return this.http.post<query>(this.putUrl, {
            name: queryForm.form.value['name'],
            contact: queryForm.form.value['phone'],
            query: queryForm.form.value['query'],
            type: queryForm.form.value['work'],
            other: queryForm.form.value['others']
        });
    }
}