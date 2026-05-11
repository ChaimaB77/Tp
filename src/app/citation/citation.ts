import { Component } from '@angular/core';

@Component({
  selector: 'app-citation',
  imports: [],
  templateUrl: './citation.html',
  styleUrl: './citation.css'
})
export class Citation {

  citations = [
    "Le succès n’est pas final, l’échec n’est pas fatal.",
    "Apprendre à coder, c’est apprendre à penser.",
    "Chaque jour est une nouvelle opportunité.",
    "Le travail paie toujours à long terme.",
    "Ne limite pas tes défis, défie tes limites."
  ];

  citationActuelle = this.citations[0];

  changerCitation() {
    const index = Math.floor(Math.random() * this.citations.length);
    this.citationActuelle = this.citations[index];
  }
}