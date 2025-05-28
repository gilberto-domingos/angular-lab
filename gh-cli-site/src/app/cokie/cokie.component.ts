import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CokieDialogComponent } from "../cokie-dialog/cokie-dialog.component";

@Component({
  selector: 'app-cokie',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './cokie.component.html',
  styleUrl: './cokie.component.scss'
})
export class CokieComponent {
  private readonly cookieKey = 'cookieKey';

  constructor(
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dialogShown = localStorage.getItem(this.cookieKey);

      if (!dialogShown) {
        this.openDialog('0500ms', '0500ms');
        localStorage.setItem(this.cookieKey, 'true');
      }
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CokieDialogComponent, {
      width: '99%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
