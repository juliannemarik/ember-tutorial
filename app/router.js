import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bands', function () {
    this.route('new');
    this.route('band', { path: ':id' }, function () {
      this.route('songs');
    });
  });
});