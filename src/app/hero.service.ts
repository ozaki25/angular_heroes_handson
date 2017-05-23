import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    constructor() { }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroSlowly(id: number): Promise<Hero> {
        return new Promise<Hero>(resolve => setTimeout(resolve, 2000)).then(() => this.getHero(id));
    }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getHeroes());
    }
}
