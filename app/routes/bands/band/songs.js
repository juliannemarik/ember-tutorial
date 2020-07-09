import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongsRoute extends Route {
    @service catalog

    resetController(controller) {
        controller.title = '';
        controller.showAddSong = true;
    }

    async model() {
        let band = this.modelFor('bands.band');
        await this.catalog.fetchRelated(band, 'songs');
        
        return band;
    }
}