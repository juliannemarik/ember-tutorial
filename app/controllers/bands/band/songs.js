import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
    @tracked showAddSong = true;
    @tracked title = '';

    @service catalog;

    @action
    async updateRating(song, rating) {
        song.rating = rating;
        this.catalog.update('song', song, { rating })
    }
    @action
    async saveSong() {
        let song = this.catalog.create(
            'song',
            { title: this.title },
            { band: { data: { id: this.model.id, type: 'bands' } } }
        );
    
        this.model.songs = [ ...this.model.songs, song];
        this.title='';
        this.showAddSong = true;
    }
    @action
    cancel() {
        this.title='';
        this.showAddSong=true;
    }
}
