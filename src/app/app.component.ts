import { Component ,OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
// contruire un composant 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
      
})
//OnInit est une interface
export class AppComponent implements OnInit {
  pokemonList:Pokemon[] = POKEMONS;
  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }
  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
