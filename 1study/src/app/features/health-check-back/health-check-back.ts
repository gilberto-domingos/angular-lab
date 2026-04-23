import { Component, inject, OnInit, signal } from '@angular/core';
import { HealthCheckService } from './health-check-service';

@Component({
  selector: 'app-health-check-back',
  imports: [],
  templateUrl: './health-check-back.html',
  styleUrl: './health-check-back.scss',
})
export class HealthCheckBack implements OnInit {
  private healthCheckService = inject(HealthCheckService);

  message = signal<string>('Loading back-end ...');

  loadMessage() {
    this.healthCheckService.getHealthCheckBack().subscribe({
      next: (res) => {
        this.message.set(res.message);
      },
      error: (err) => {
        console.log(err);
        this.message.set('Error connecting to backend');
      },
    });
  }

  ngOnInit(): void {
    this.loadMessage();
  }
}
