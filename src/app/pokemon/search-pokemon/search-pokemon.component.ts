import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import {Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})

export class SearchPokemonComponent implements OnInit{
  // {..."a".."ab"..}
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(
    private router: Router,
    private pokemonService: PokemonService   
  ) {

  }
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"...}
      debounceTime(300),
       //{..."a"."ab"..."ab"."abc"...}
      distinctUntilChanged(),
       //{..."a"."ab"..."abc"...}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
       //{...pokemonList(ab)...}
    );
    
  }

  search(term: string){
    this.searchTerms.next(term);

  }
  goToDetail(pokemon: Pokemon){
    const link =['/pokemon', pokemon.id];
    this.router.navigate(link);

  }

}
