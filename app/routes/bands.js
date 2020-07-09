import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Band from '../models/band';
import Song from '../models/song';

export default class BandsRoute extends Route {
    @service catalog; 

    model() {
        let blackDog = new Song({
            title: 'BlackDog',
            rating: 3
        });
        let yellowLedbetter = new Song({
            title: 'Yellow Ledbetter',
            rating: 4
        });
        let pretender = new Song({
            title: 'The Pretender',
            rating: 2
        });
        let daughter = new Song({
            title: 'Daughter',
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

        blackDog.band = ledZeppelin;
        yellowLedbetter.band = pearlJam;
        daughter.band = pearlJam;
        pretender.band = fooFighters;

        this.catalog.add('song', blackDog);
        this.catalog.add('song', yellowLedbetter);
        this.catalog.add('song', pretender);
        this.catalog.add('song', daughter);

        this.catalog.add('band', ledZeppelin)
        this.catalog.add('band', pearlJam)
        this.catalog.add('band', fooFighters)

        return this.catalog.bands
    }
}
