import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Categorie } from '../models/categorie.model';
import { User } from '../models/user.model';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.css']
})
export class AdminCategorieComponent {
  categories: Categorie[] = [];
  accessToken!: any;
  currentUser!: User;
  categorieToDelete!: Categorie | null;
  ngOnInit(): void {
    const userAccessToken = localStorage.getItem("accessToken"); 

    const userData = localStorage.getItem("accessToken");
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;
    } else {
      console.error('User data not found in local storage');   
    }
    this.getAllCategories();

  }
  constructor(private categorieService: CategorieService, private router: Router,private userService: UserService) {}

  getAllCategories(): void {
    this.categorieService.getAllCategories().subscribe(evtns => {
      this.categories = evtns;
    }, error => {
      console.error('Error fetching Categories:', error);
    });
  }
  updateEvent(id :number){
    this.router.navigate(["/updateEvent",id])
   }

  CategorieToDelete!:Categorie;
  confirmDelete(categorie: Categorie) {
    this.CategorieToDelete = categorie; 

    Swal.fire({
      title: 'Are you sure you want to delete this event?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this. CategorieToDelete) {
          console.error('No categorie selected for deletion!');
          return; 
        }

        this.categorieService.deleteCategorie(this. CategorieToDelete.id)
          .subscribe((response) => {
            console.log('Deleted:', response); 
            Swal.fire('Deleted!', 'categorie deleted successfully.', 'success');
            
          }, (error) => {
            console.error('Error deleting categorie:', error);
            Swal.fire('Error!', 'An error occurred during deletion.', 'error');
          });
      }
    });
  }
  



  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    window.location.reload();
  }
}
