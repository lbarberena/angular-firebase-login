import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth, // Inject Firebase auth service
              private router: Router,
              private alertService: AlertService) {}

  login(email: string, password: string) {
     this.afAuth.signInWithEmailAndPassword(email, password)
       .then(value => {
         this.isLoggedIn = true;
         localStorage.setItem('user', JSON.stringify(value.user));
         this.alertService.showAlert('Bienvenido/a', 'Sesión iniciada con éxito', 'success');
         this.router.navigateByUrl('/home');
       })
       .catch(err => {
         this.alertService.showAlert('Error', err.message, 'error');
       });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(value.user));
        this.alertService.showAlert('Bienvenido/a', 'Cuenta creada con éxito', 'success');
        this.router.navigateByUrl('/home');
      })
      .catch(err => {
        this.alertService.showAlert('Error', err.message, 'error');
      });
  }

  // Auth logic to run auth providers
  loginWithProvider(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((value) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(value.user));
        this.alertService.showAlert('Bienvenido/a', 'Sesión iniciada con éxito', 'success');
        this.router.navigateByUrl('/home');
      }).catch((err) => {
        this.alertService.showAlert('Error', err.message, 'error');
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.alertService.showAlert('Vuelve pronto', 'Sesión finalizada con éxito', 'success');
      this.router.navigate(['/auth/login']);
    });
  }
}
