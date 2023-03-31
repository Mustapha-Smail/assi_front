import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  constructor(
    private utilisateurService: UtilisateurService,
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  userForm: FormGroup = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.route.snapshot.url.some((segment) => segment.path === 'admin')) {
      this.adminService
        .connexion(
          this.userForm.controls['email'].value,
          this.userForm.controls['password'].value
        )
        .subscribe((result) => {
          console.log(result);
          if (result) {
            localStorage.setItem('admin', JSON.stringify(result));

            if (history.state && history.state.navigationId > 1) {
              history.back();
            } else {
              this.router.navigate(['/']);
            }
          } else {
            location.reload();
          }
        });
    } else {
      this.utilisateurService
        .connexion(
          this.userForm.controls['email'].value,
          this.userForm.controls['password'].value
        )
        .subscribe((result) => {
          console.log(result);
          if (result) {
            localStorage.setItem('user', JSON.stringify(result));

            if (history.state && history.state.navigationId > 1) {
              history.back();
            } else {
              this.router.navigate(['/']);
            }
          } else {
            location.reload();
          }
        });
    }
  }
}
