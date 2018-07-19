import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Application.MODEL_FACTORY_INJECTIONS = true;

// for apps that require info from the main app
let appOptions = {};

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  autoboot: config.autoboot,
  Resolver,
  appOptions
});

loadInitializers(App, config.modulePrefix);

export default App;
