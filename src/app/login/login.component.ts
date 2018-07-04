import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.components.scss']
})

export class LoginComponent implements OnInit {

  snackbarText: string;


  constructor() {

  }

  ngOnInit() {

  }

  showSnackBar() {
    // Get the snackbar DIV
    const x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }

}
