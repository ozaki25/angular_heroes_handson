import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    title = 'Heroes!';

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
