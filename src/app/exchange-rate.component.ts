import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
  private eventSource = new EventSource(environment.apiHost + '/exchange-rate-stream');

  ngOnInit(): void {
    this.getExchangeRate();
  }
  getExchangeRate() {
    this.eventSource.onmessage = (message => {
      const pre = document.createElement('h3');
      pre.innerHTML = message.data;
      const output = document.getElementById('output');
      output.appendChild(pre);
    });
  }
}
