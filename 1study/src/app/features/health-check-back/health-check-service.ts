import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HealthCheck } from './health-check-model';

@Injectable({
  providedIn: 'root',
})
export class HealthCheckService {
  private url = `${environment.apiUrl}/health`;

  private http = inject(HttpClient);

  getHealthCheckBack(): Observable<HealthCheck> {
    return this.http.get<HealthCheck>(this.url);
  }
}
