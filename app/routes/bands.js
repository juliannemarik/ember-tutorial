import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
class Band {
    @tracked name;
    constructor(name) {
        this.name = name;
    }
}

export default class BandsRoute extends Route {
    model() {
        return [
            new Band('Led Zeppelin'),
            new Band('Pearl Jam'),
            new Band('Foo Fighters')
        ];
    }
}
