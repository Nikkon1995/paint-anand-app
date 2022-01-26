import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    constructor(private contactService: ContactService) {}
    servicesProdvided: string[] = [
        'Civil Work',
        'Painting Work',
        'Carpenter Work',
        'Sliding Work',
        'Electric Work',
        'Water Proofing',
        'Restoration',
        'Tiles, Marble',
        'Plaster, Paris or Wall Putty',
        'Modular Bedroom',
        'Modular Kitchen',
        'Modular Bathroom',
        'False Ceiling',
        'Repairing',
        'Plumbing Work'
    ];

    onSubmit(form: NgForm) {
        this.contactService.storeQuery(form).subscribe();
        console.log(form.form.value);
        form.reset()
    }

    onClear(form: NgForm) {
        form.reset();
    }
}