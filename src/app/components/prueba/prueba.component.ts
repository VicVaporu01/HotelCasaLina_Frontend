import {Component, inject, OnInit} from '@angular/core';
import {CabinService} from "../../services/cabin.service";
import {response} from "express";


@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  _cabinService:CabinService = inject(CabinService);

  constructor() {

  }

  ngOnInit(): void {
    this.getListCabins();
  }

  getListCabins() {
    this._cabinService.getListCabins().subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
