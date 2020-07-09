import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export class Band {
    @tracked name;
    @tracked songs;

    constructor({ name, slug, songs }) {
        this.name = name;
        this.slug = slug;
        this.songs = songs;
    }
}

export class Song {
    title = '';
    rating = 0;
    band = '';

    constructor({ title, rating, band }) {
        this.title = title;
        this.rating = rating;
        this.band = band;
    }
}

export default class BandsRoute extends Route {
    model() {
        let blackDog = new Song({
            title: 'BlackDog',
            band: 'Led Zeppelin',
            rating: 3
        });
        let yellowLedbetter = new Song({
            title: 'Yellow Ledbetter',
            band: 'Pearl Jam',
            rating: 4
        });
        let pretender = new Song({
            title: 'The Pretender',
            band: 'Foo Fighters',
            rating: 2
        });
        let daughter = new Song({
            title: 'Daughter',
            band: 'Pearl Jam',
            rating: 5
        });

        let ledZeppelin = new Band({
            name: 'Led Zeppelin',
            slug: 'led-zeppelin',
            songs: [blackDog]
        });
        let pearlJam = new Band({
            name: 'Pearl Jam',
            slug: 'pearl-jam',
            songs: [yellowLedbetter, daughter]
        });
        let fooFighters = new Band({
            name: 'Foo Fighters',
            slug: 'foo-fighters',
            songs: [pretender]
        });

        return [ledZeppelin, pearlJam, fooFighters];
    }
}
