import { tracked } from '@glimmer/tracking';

export default class Band {
    @tracked name;
    @tracked songs;

    constructor({ name, id, songs }, relationships={}) {
        this.name = name;
        this.id = id;
        this.songs = songs ?? [];
        this.relationships = relationships;
    }
}