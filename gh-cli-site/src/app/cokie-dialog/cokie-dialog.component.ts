import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cokie-dialog',
  standalone: true,
  imports: [MatCardModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './cokie-dialog.component.html',
  styleUrl: './cokie-dialog.component.scss'
})
export class CokieDialogComponent {

}
