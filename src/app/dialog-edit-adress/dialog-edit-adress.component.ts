import { Component, OnInit } from '@angular/core';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { addDoc, collection } from '@firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent implements OnInit {
  user: User;
  loading = false;
  coll: any;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>,
    private firestore: Firestore) {
      this.coll = collection(this.firestore, 'users')
    }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    await updateDoc(doc(this.coll, this.userId), { user: this.user.toJson() });
    this.loading = false;
    this.dialogRef.close();
    location.reload();
  }

}
