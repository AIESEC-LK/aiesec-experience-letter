import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'endorsement-letters';

  entities = [
    'Colombo Central',
    'Colombo North',
    'Colombo South',
    'Kandy',
    'USJ',
    'NSBM',
    'Ruhuna',
    'SLIIT',
    'Rajarata',
    'NIBM',
    'Wayamba',
  ];

  form = {
    name: null as string | null,
    email: null as string | null,
    contact: null as string | null,
    entity: null as string | null,
    full_member: false,
    joined: null as Date | null,
    exit: null as Date | null,
    positions: [
      {
        role: null as string | null,
        function: null as string | null,
        entity: null as string | null,
      },
    ],
    conferences: [
      {
        role: null as string | null,
        name: null as string | null,
        year: null as string | null,
      },
    ],
    achievements: [
      {
        title: null as string | null,
        entity: null as string | null,
        term: null as string | null,
      },
    ],
    pmvp: null as string | null,
    reason: null as string | null,
  };

  loading = false;

  constructor(
    private store: AngularFirestore,
    private _snackBar: MatSnackBar
  ) {}

  submit() {
    if (!this.validateForm()) return;
    this.loading = true;
    this.store
      .collection('requests')
      .doc(new Date().toISOString() + this.form.email!)
      .set(this.form)
      .then(
        (r) => {
          this.loading = false;
          this.openSnackBar('Your request has been submitted', 'Dismiss');
        },
        (e) => {
          this.loading = false;
          this.openSnackBar('An error occurred.' + e, 'Dismiss');
        }
      );
  }

  validateForm() {
    let flag = true;
    let errorMessage = '';

    //Validate name
    if (!this.form.name || this.form.name.trim() === '') {
      flag = false;
      errorMessage += 'Name is required. ';
    }

    //Validate email
    if (!this.form.email || this.form.email.trim() === '') {
      flag = false;
      errorMessage += 'Email address is required. ';
    } else {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.form.email)) {
        flag = false;
        errorMessage += 'Please enter a valid email address. ';
      }
    }

    //Validate contact
    if (!this.form.contact || this.form.contact.trim() === '') {
      flag = false;
      errorMessage += 'Contact number is required. ';
    }

    //Validate entity
    if (!this.form.entity || this.form.entity === '') {
      flag = false;
      errorMessage += 'Entity is required. ';
    }

    //Validate joined date
    if (!this.form.joined) {
      flag = false;
      errorMessage += 'Date you joined AIESEC is required. ';
    }

    if (!flag) {
      this.openSnackBar(errorMessage, 'Dismiss');
    }

    return flag;
  }

  addExperience() {
    this.form.positions.push({ role: null, function: null, entity: null });
  }

  addConference() {
    this.form.conferences.push({ role: null, name: null, year: null });
  }

  addAchievement() {
    this.form.achievements.push({ title: null, entity: null, term: null });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
