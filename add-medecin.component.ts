import { Component, OnInit } from '@angular/core';
import { MedecinComponent } from '../medecin/medecin.component';
import{ medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
 
})
export class AddMedecinComponent implements OnInit {
  newMedecin = new medecin();
message :string;

  constructor(private medecinservice : MedecinService) { }

  ngOnInit(): void {
  }
  addMedecin(){
  //console.log(this.newMedecin);
  this.medecinservice.ajouterMedecin(this.newMedecin);
    this.message="Medecin "+this.newMedecin.nomMedecin+"ajouté avec sucés ";
  }
}
