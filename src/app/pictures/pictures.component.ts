import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-picture',
    templateUrl: './pictures.component.html',
    styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit{
    animate = true;
    ngOnInit(): void {
        setTimeout(()=> {
            this.animate = false;
        }, 2000)
    }

    typesOfWork: string[] = [
        'Repair',
        'Painting',
        'False-ceiling',
        'Kitchen',
        'Shoe-rack',
        'Bathroom',
        'Tiles',
        'Furniture',
    ];

    repairImages = [
        'Repair 1.jpg',
        'Repair 2.jpg',
        'Repair 3.jpg'
    ];

    paintImages = [
        'Paint 1.jpg',
        'Paint 2.jpg'
    ];

    kitchenImages = [
        'Kitchen 1.jpg',
        'Kitchen 2.jpg',
        'Kitchen 3.jpg',
    ];

    ceilingImages = [
        'Ceiling 1.jpg',
        'Ceiling 2.jpg',
        'Ceiling 3.jpg',
        'Ceiling 4.jpg',
        'Ceiling 5.jpg',
        'Ceiling 6.jpg',
        'Ceiling 7.jpg',
        'Ceiling 8.jpg',
        'Ceiling 9.jpg',
        'Ceiling 10.jpg',
        'Ceiling 11.jpg'
    ];

    shoeRackImages: string[] = [];

    bathroomImages: string[] = [
        'Bathroom 1.jpg',
        'Bathroom 2.jpg',
        'Bathroom 3.jpg',
        'Bathroom 4.jpg',
        'Bathroom 5.jpg',
        'Bathroom 6.jpg',
        'Bathroom 7.jpg',
    ];

    tilesImages: string[] = [
        'Tiles 1.jpg',
        'Tiles 2.jpg',
        'Tiles 3.jpg',
        'Tiles 4.jpg',
        'Tiles 5.jpg',
        'Tiles 6.jpg',
        'Tiles 7.jpg',
        'Tiles 8.jpg',
    ];

    furnitureImages: string[] = [
        'Furniture 1.jpg',
        'Furniture 2.jpg',
        'Furniture 3.jpg',
        'Furniture 4.jpg',
        'Furniture 5.jpg',
        'Furniture 6.jpg',
        'Furniture 7.jpg',
        'Furniture 8.jpg',
        'Furniture 9.jpg',
        'Furniture 10.jpg',
        'Furniture 11.jpg',
    ];
}