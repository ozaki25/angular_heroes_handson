import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}