import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { error } from 'console';


@Injectable()
export class PokemonService {

  constructor(private http : HttpClient) {}

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error)=> {
        console.log(error);
        return of([]);
      })
    )
  }

  getPokemonById(pokemonId: number): Observable <Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    )
  }

  getPokemonTypeList(): string[]{
    return ['Plante','Feu','Eau','Insecte',
      'Normal','Electrik','Poison','Fée','Vol','Combat',
    'psy'  ];
  }
}
