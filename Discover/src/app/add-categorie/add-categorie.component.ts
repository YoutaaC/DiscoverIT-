import { Component } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Categorie } from '../models/categorie.model';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  newCatg: any = {
    id:-1,
    type:"",
  };
  
  newCategorieToAdd!:Categorie;

  forminput!:FormGroup;

  constructor(private formBuilder:FormBuilder,private categorieService: CategorieService, private router: Router,private userService: UserService) {}
  

  ngOnInit(): void {
    this.forminput=this.formBuilder.group(
      {
        'type':['',[Validators.required]]
      }
    );
  }

  createCategorie() {
      if (this.newCatg.type) {
        this.categorieService.createCategorie(this.newCatg)
          .subscribe(createdCateg => {
            console.log('Event added successfully:', createdCateg);
            Swal.fire({
              title: "success",
              text: "Event added successfully",
              icon: "success"
            });
          }, error => {
            console.error('Error adding Event:', error);
            Swal.fire({
              title: "Error !",
              text: "Error adding Event",
              icon: "error"
            });
          });
      } else {
        console.error('categorie required.');
        
      }
    }


}
