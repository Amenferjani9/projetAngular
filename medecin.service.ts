import { Injectable } from '@angular/core';
import{ medecin } from '../model/medecin.model';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  medecins : medecin[];
 Medecin : medecin | undefined;
  medecin!: medecin;
  constructor() { 
    this.medecins = [
      {idMedecin : 1, nomMedecin : "ali ferjani", salaire : 3000.600, dateNaissance : new Date("01/14/1999")},
      {idMedecin : 2, nomMedecin : "amen allah ferjani", salaire : 450, dateNaissance: new Date("12/17/2001")},
       {idMedecin : 3, nomMedecin :"monir ferjani", salaire : 900.123, dateNaissance : new Date("02/20/1989")}
    ];
  }
listeMedecin():medecin[]{
return this.medecins;
}
ajouterMedecin(medecin : medecin ){
this.medecins.push(medecin);
}
supprimerMedecin( prod: medecin){
  //supprimer le medecin prod du tableau medecins
  const index = this.medecins.indexOf(prod, 0);
  if (index > -1) {
  this.medecins.splice(index, 1);
  }
  //ou Bien
  /* this.medecins.forEach((cur, index) => {
  if(prod.idMedecin === cur.idMedecin) {
  this.medecins.splice(index, 1);
  }
  }); */
  }
  consulterMedecin(id:number): medecin{
    this.Medecin = this.medecins.find(p => p.idMedecin == id);
    return this.medecin;
    }
    updateMedecin(p:medecin)
{
// console.log(p);
this.supprimerMedecin(p);
this.ajouterMedecin(p);
this.trierMedecins();
}
trierMedecins(){
  this.medecins = this.medecins.sort((n1,n2) => {
  if (n1.idMedecin > n2.idMedecin) {
  return 1;
  }
  if (n1.idMedecin < n2.idMedecin) {
  return -1;
  }
  return 0;
  });
  }
  
}
