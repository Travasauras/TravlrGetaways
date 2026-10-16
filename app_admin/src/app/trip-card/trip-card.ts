import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data'
import { Authentication } from '../services/authentication';

@Component({
  imports: [CommonModule],
  selector: 'app-trip-card',
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard implements OnInit {

  @Input('trip') trip: any;

  constructor(private router: Router,
              private tripData: TripData,
              private authentication: Authentication
            ) {}

            public isLoggedIn()
            {
              return this.authentication.isLoggedIn();
            }

  ngOnInit(): void {

  }   

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripData.deleteTrip(trip.code)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          window.location.reload();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

}
