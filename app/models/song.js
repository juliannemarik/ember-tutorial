export default class Song {
    title = '';
    rating = 0;
    band = '';

    constructor({ title, rating, band }) {
        this.title = title;
        this.rating = rating;
        this.band = band;
    }
}