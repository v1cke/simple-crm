import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { collection, setDoc } from '@firebase/firestore';
import { addDoc, doc, Firestore } from '@angular/fire/firestore';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})

export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;
  coll: any;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>, 
    private firestore: Firestore) {
    this.coll = collection(this.firestore, 'users')
   }

  ngOnInit(): void {
  }

  async saveUser(){
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    // console.log("current user is ", this.user);
    await addDoc(this.coll, { user: this.user.toJson() });
    this.loading = false;
    this.dialogRef.close();
  }
}
