import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  namespace: computed(() => {
    let path = window.location.pathname;
    let slash = path.lastIndexOf('/');
    let hasSlash = slash !== -1;
    return (hasSlash) ? `${path.substr(0, slash)}/api` : `${path}/api`;
  });

});
