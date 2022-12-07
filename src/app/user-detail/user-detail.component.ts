import { Component, OnInit } from '@angular/core';
import { deleteUser } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userID = '';
  selectedUser: any;
  user: User = new User;

  constructor(private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog) { }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userID = params['id'];
      // console.log('id is ', this.userID);
    });
    await this.getUser(this.userID);
  }

  async getUser(id: string) {
    const collection = doc(this.firestore, `users/${id}`);
    const collectionUser = await getDoc(collection);
    this.selectedUser = collectionUser.data();
    this.user = new User(this.selectedUser.user);
    // console.log('user daten sind: ', this.user);
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userID;
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userID;
  }

  deleteUser() {
    const dialog = this.dialog.open(DialogDeleteUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userID;
  }
}
