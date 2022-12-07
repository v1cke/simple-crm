import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { addDoc, collection } from '@firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  loading = false;
  coll: any;
  birthDate: Date;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: Firestore,) {
    this.coll = collection(this.firestore, 'users')
  }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    await updateDoc(doc(this.coll, this.userId), { user: this.user.toJson() });
    this.loading = false;
    this.dialogRef.close();
    location.reload();
  }
}
