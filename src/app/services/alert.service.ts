import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor() { }

  showAlert(aTitle, aBody, aIcon) {
    Swal.fire({
      title: aTitle,
      html: aBody,
      icon: aIcon,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    });
  }
}
