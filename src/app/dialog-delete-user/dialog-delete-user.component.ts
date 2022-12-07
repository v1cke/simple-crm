import { Component, OnInit } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { collection, deleteDoc } from '@firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {
  user: User;
  coll: any;
  birthDate: Date;
  userId: string;

  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>,
    private firestore: Firestore,
    public router: Router) {
    this.coll = collection(this.firestore, 'users')
  }

  ngOnInit(): void {
  }

  async deleteUser() {
    await deleteDoc(doc(this.coll, this.userId));
    this.dialogRef.close();
    this.router.navigate(['/user']);
  }

  displayDeleteContainer(){
    
  }
}
