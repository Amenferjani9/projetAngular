import { Component, OnInit } from '@angular/core';
import{ medecin } from '../model/medecin.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styles: [
  ]
})
export class UpdateMedecinComponent implements OnInit {
  [x: string]: any;
currentMedecin=new medecin();
  constructor(private activatedRoute: ActivatedRoute,
              private medecinService: MedecinService,
              private router :Router) { }

  ngOnInit(): void {
// console.log(this.route.snapshot.params.id);
this.currentMedecin = this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params.id);
console.log(this.currentMedecin);

  }
  updateMedecin()
  { //console.log(this.currentMedecin);
  this.medecinService.updateMedecin(this.currentMedecin);
  this.router.navigate(["medecin"]);
}

}
