import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsNewController extends Controller {
    @service catalog;
    @service router;

    @action
    async saveBand() {
        let band = await this.catalog.create('band', { name: this.name });
        this.router.transitionTo('bands.band.songs', band.id);
    }
}