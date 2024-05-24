import { Component } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../models/categorie.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent {
  categorie!: Categorie;
  categorieId!: number;

  constructor(
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categorieId = +id;
      this.getCategorie();
    } else {
      console.error('Invalid category ID');
    }
  }

  getCategorie(): void {
    this.categorieService.getCategorieById(this.categorieId).subscribe(
      categorie => {
        this.categorie = categorie;
      },
      error => {
        console.error('Error fetching category:', error);
      }
    );
  }

  confirmUpdate(): void {
    Swal.fire({
      title: 'Are you sure you want to update this category?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.categorie) {
          this.categorieService.updateCategorie(this.categorieId, this.categorie)
            .subscribe(
              updatedCategorie => {
                console.log('Updated category:', updatedCategorie);
                Swal.fire('Updated!', 'Category updated successfully.', 'success');
              },
              error => {
                console.error('Error updating category:', error);
                Swal.fire('Error!', 'An error occurred during the update.', 'error');
              }
            );
        } else {
          console.error('No category data to update!');
        }
      }
    });
  }
}
