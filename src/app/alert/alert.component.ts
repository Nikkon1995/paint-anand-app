import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    
    onClose() {
        this.close.emit();
    }
}