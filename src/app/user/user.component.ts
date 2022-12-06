import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { collection } from '@firebase/firestore';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  coll: any;
  user$: Observable<any>;
  allUsers = [];

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.loadFirestore();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  loadFirestore() {
    this.coll = collection(this.firestore, 'users');
    this.user$ = collectionData(this.coll, { idField: 'id' });
    this.user$.subscribe((newUser) => {
      this.allUsers = newUser;
    });
  }

}
