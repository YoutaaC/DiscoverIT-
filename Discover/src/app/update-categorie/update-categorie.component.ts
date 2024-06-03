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
    this.categorieService.getCatgById(this.categorieId).subscribe(
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
      title: 'Êtes-vous sûr de vouloir mettre à jour cette catégorie ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Mettre à jour',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.categorie) {
          this.categorieService.updateCategorie(this.categorieId, this.categorie)
            .subscribe(
              updatedCategorie => {
                console.log('Updated category:', updatedCategorie);
                Swal.fire('Mise à jour !', 'Catégorie mise à jour avec succès.', 'success');
              },
              error => {
                console.error('Error updating category:', error);
                Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la mise à jour.', 'error');
              }
            );
        } else {
          console.error('Aucune donnée de catégorie à mettre à jour !');
        }
      }
    });
  }
}
