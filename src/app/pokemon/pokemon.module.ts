import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BordCardDirective } from './bord-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';


const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent},
  { path: 'pokemons', component: ListPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent},
 

];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BordCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent,
    AddPokemonComponent,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
