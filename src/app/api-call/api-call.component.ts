import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent implements OnInit {
responseData: any;

constructor(private apiService: ApiService)
{}
ngOnInit(): void {
  this.fetchData();
}
fetchData() {
  this.apiService.getSomeData().subscribe(
    (data) => {
      this.responseData = data;
      console.log(this.responseData.items);
      
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}
}
