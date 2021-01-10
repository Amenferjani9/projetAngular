import { Component, OnInit } from '@angular/core';
import{ medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
 
})
export class MedecinsComponent implements OnInit {
  medecins: medecin[];



      constructor(private medecinservice : MedecinService) {
       this.medecins= medecinservice.listeMedecin();
        }
         


  ngOnInit(): void {

  }
   suppriMermedecin(p: medecin)
   {
   //console.log(p);
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.medecinservice.supprimerMedecin(p);
   }
}
