import { Component, OnInit } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private api: BackApiServiceService) {}
  users : any [] = [];
  
  ngOnInit(): void {
    this.api.getUsers().subscribe(data => {
      this.users=data as any;
      console.log(data)
  });
}  
}
