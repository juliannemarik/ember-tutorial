import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Song from '../../../models/song';
import { inject as service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
    @tracked showAddSong = true;
    @tracked title = '';

    @service catalog;

    @action
    saveSong() {
        let song = new Song({
            title: this.title,
            band: this.model
        });
        this.catalog.add('song', song);
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
