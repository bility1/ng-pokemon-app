import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-serach-pokemon',
  templateUrl: './serach-pokemon.component.html',
  styles: [
  ]
})

export class SerachPokemonComponent implements OnInit{
  // {..."a".."ab"..}
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    
  }

  search(term: string){
    this.searchTerms.next(term);

  }
  goToDetail(pokemon: Pokemon){
    const link =['/pokemon', pokemon.id];
    this.router.navigate(link);

  }

}
