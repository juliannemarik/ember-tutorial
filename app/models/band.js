import { tracked } from '@glimmer/tracking';

export default class Band {
    @tracked name;
    @tracked songs;

    constructor({ name, slug, songs }) {
        this.name = name;
        this.slug = slug;
        this.songs = songs ?? [];
    }
}