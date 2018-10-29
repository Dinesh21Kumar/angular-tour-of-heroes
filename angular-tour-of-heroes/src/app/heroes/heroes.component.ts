import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private hs: HeroService) { }

  ngOnInit() {
  	console.log("loaded")
    this.fetchHeroes();

  }

  onSelect(hero) {
  	this.selectedHero = hero;
  	console.log(this.selectedHero.name)
  }

  fetchHeroes() {
    this.heroes = this.hs.fetchHeroes();
  }

}
